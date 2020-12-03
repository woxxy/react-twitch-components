import {
  ApiRequestActionTypes,
  ApiRequestState,
  ApiRequestActions,
} from './interfaces';
import { getRequestHash } from './helpers';
import produce from 'immer';

export const apiRequestReducer = (
  state: ApiRequestState,
  action: ApiRequestActions
): ApiRequestState => {
  switch (action.type) {
    case ApiRequestActionTypes.SET:
      const { payload } = action;

      return produce(state, draftState => {
        draftState.requests[
          getRequestHash(payload.path, payload.params)
        ] = payload;
      });

    case ApiRequestActionTypes.UPDATE_EXPIRED:
      return produce(state, draftState => {
        const currentTime = new Date().getTime();
        Object.entries(draftState.requests).forEach(([_, request]) => {
          if (
            request.expirationTime &&
            request.status === 'fetched' &&
            request.expirationTime.getTime() < currentTime
          ) {
            request.status = 'ready_to_fetch';
          }
        });
      });

    default:
      return state;
  }
};
