import useSWR from 'swr';
import {
  TwitchResponses,
  TwitchUsersResponse,
  TwitchBroadcasterSubscriptionsResponse,
  TwitchUsersFollowsResponse,
} from '../interfaces';
import { TWITCH_API_ENDPOINT } from '../constants';

const clientId = '9031tpad4quocef3dgtu0bbnbupmdr';
const accessToken = null; // TODO: fix

const requestInit: RequestInit = {
  method: 'GET',
  mode: 'cors',
  cache: 'no-store',
  headers: {
    'client-id': clientId,
    Authorization: `Bearer ${accessToken}`,
  },
};

const twitchApiFetcher = async <T extends TwitchResponses>(
  url: string
): Promise<T> => {
  const response = await fetch(url, requestInit);
  return response.json();
};

const useTwitchApi = <T extends TwitchResponses>(path: string) => {
  const url = accessToken === null ? null : `${TWITCH_API_ENDPOINT}${path}`;
  return useSWR<T>(url, twitchApiFetcher);
};

export const useTwitchUsers = () => {
  return useTwitchApi<TwitchUsersResponse>('users');
};

export const useTwitchFollowers = () => {
  // TODO: use context to get to_id?
  const params = new URLSearchParams({ to_id: '123' });
  return useTwitchApi<TwitchUsersFollowsResponse>(`users/follows?${params}`);
};

export const useTwitchSubscriptions = () => {
  // TODO: use context to get broadcaster_id?
  const params = new URLSearchParams({ broadcaster_id: '123' });
  return useTwitchApi<TwitchBroadcasterSubscriptionsResponse>(
    `subscriptions?${params}`
  );
};
