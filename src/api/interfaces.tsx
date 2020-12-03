import { AxiosResponse, AxiosInstance } from 'axios';
import { TwitchApiStatus, TwitchResponses } from '../interfaces';
import { Dispatch } from 'react';

export interface TwitchAPIContextProps {
  apiRequestState: ApiRequestState;
  apiRequestDispatch: Dispatch<ApiRequestSetAction>;
  httpClient: AxiosInstance;
}

export interface ApiRequest {
  promise: Promise<AxiosResponse> | null;
  status: TwitchApiStatus;
  result: TwitchResponses | null;
  path: string;
  params: Record<string, string> | null;
  expirationLengthInSeconds: number | null;
  expirationTime: Date | null;
}

export interface ApiRequestState {
  requests: Record<string, ApiRequest>;
}

export enum ApiRequestActionTypes {
  SET = 'set',
  UPDATE_EXPIRED = 'update_expired',
}

export interface ApiRequestSetAction {
  type: ApiRequestActionTypes.SET;
  payload: ApiRequest;
}

export interface ApiRequestUpdateExpiredAction {
  type: ApiRequestActionTypes.UPDATE_EXPIRED;
}

export type ApiRequestActions =
  | ApiRequestSetAction
  | ApiRequestUpdateExpiredAction;
