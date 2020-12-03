import { useTwitchContext } from './useTwitchContext';
import { DependencyList, useEffect } from 'react';
import { TwitchApiStatus, TwitchResponses } from '../interfaces';
import { getRequestHash } from '../api/helpers';
import { ApiRequestActionTypes } from '../api/interfaces';

export const useTwitchApi = <T extends TwitchResponses>(
  path: string,
  params: Record<string, string> | null = null,
  deps?: DependencyList,
  timeout: number | null = 10
): [TwitchApiStatus, T | null] => {
  const { apiRequestState, apiRequestDispatch } = useTwitchContext();

  useEffect(() => {
    const queueRequest = async () => {
      const existingRequest =
        apiRequestState.requests[getRequestHash(path, params)];

      if (existingRequest && !(existingRequest.status in ['not_fetched'])) {
        return;
      }

      apiRequestDispatch({
        type: ApiRequestActionTypes.SET,
        payload: {
          path,
          params,
          promise: null,
          status: 'ready_to_fetch',
          result: null,
          expirationLengthInSeconds: timeout,
          expirationTime: null,
        },
      });
    };

    queueRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  const existingRequest =
    apiRequestState.requests[getRequestHash(path, params)];

  if (!existingRequest) {
    return ['not_fetched', null];
  }

  return [existingRequest.status, existingRequest.result as T];
};
