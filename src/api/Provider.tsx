import { useCallback, useEffect, useReducer } from 'react';
import { TwitchAPIContext } from './context';
import { getHTTPClient } from './helpers';
import { apiRequestReducer } from './reducer';
import { TWITCH_API_ENDPOINT } from '../constants';
import { ApiRequestActionTypes } from './interfaces';

interface TwitchAPIProviderProps {
  accessToken: string;
  children: React.ReactNode;
}

export const TwitchAPIProvider = ({
  accessToken,
  children,
}: TwitchAPIProviderProps) => {
  const [apiRequestState, apiRequestDispatch] = useReducer(apiRequestReducer, {
    requests: {},
  });

  const httpClient = getHTTPClient(accessToken);

  const expirationChecker = useCallback(() => {
    apiRequestDispatch({ type: ApiRequestActionTypes.UPDATE_EXPIRED });
    setTimeout(expirationChecker, 1000);
  }, [apiRequestDispatch]);

  useEffect(() => {
    const timeoutId = setTimeout(expirationChecker, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [expirationChecker]);

  useEffect(() => {
    Object.keys(apiRequestState.requests).forEach(requestKey => {
      const run = async () => {
        const request = apiRequestState.requests[requestKey];

        if (request.status !== 'ready_to_fetch') {
          return;
        }

        try {
          const promise = httpClient.get(TWITCH_API_ENDPOINT + request.path, {
            params: request.params,
          });

          apiRequestDispatch({
            type: ApiRequestActionTypes.SET,
            payload: {
              path: request.path,
              params: request.params,
              promise: promise,
              status: 'fetching',
              result: request?.result || null,
              expirationLengthInSeconds: request.expirationLengthInSeconds,
              expirationTime: null,
            },
          });

          const result = await promise;

          let expirationTime = null;
          if (request.expirationLengthInSeconds) {
            const currentTime = new Date();
            expirationTime = new Date(
              currentTime.getTime() + request.expirationLengthInSeconds * 1000
            );
          }
          apiRequestDispatch({
            type: ApiRequestActionTypes.SET,
            payload: {
              path: request.path,
              params: request.params,
              promise: null,
              status: 'fetched',
              result: result?.data,
              expirationLengthInSeconds: request.expirationLengthInSeconds,
              expirationTime: expirationTime,
            },
          });
        } catch (e) {
          debugger;
          apiRequestDispatch({
            type: ApiRequestActionTypes.SET,
            payload: {
              path: request.path,
              params: request.params,
              promise: null,
              status: 'error',
              result: null,
              expirationLengthInSeconds: request.expirationLengthInSeconds,
              expirationTime: null,
            },
          });
        }
      };

      run();
    });
  }, [apiRequestState.requests, httpClient]);

  return (
    <TwitchAPIContext.Provider
      value={{
        apiRequestState,
        apiRequestDispatch,
        httpClient,
      }}
    >
      {children}
    </TwitchAPIContext.Provider>
  );
};
