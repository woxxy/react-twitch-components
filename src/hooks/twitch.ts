import useSWR from 'swr';
import { useTwitchContext } from '../components/TwitchContext';
import { TWITCH_API_ENDPOINT } from '../constants';
import {
  TwitchResponses,
  TwitchUsersResponse,
  TwitchBroadcasterSubscriptionsResponse,
  TwitchUsersFollowsResponse,
} from '../interfaces';

const requestInit: RequestInit = {
  method: 'GET',
  mode: 'cors',
  cache: 'no-store',
};

const twitchApiFetcher = async <T extends TwitchResponses>(
  url: string,
  headers: HeadersInit
): Promise<T> => {
  const response = await fetch(url, { ...requestInit, headers });
  return response.json();
};

const useTwitchApi = <T extends TwitchResponses>(path: string | null) => {
  const { accessToken, clientId } = useTwitchContext();
  const url = path === null ? null : `${TWITCH_API_ENDPOINT}${path}`;
  const headers: HeadersInit = {
    'client-id': clientId,
    Authorization: `Bearer ${accessToken}`,
  };
  return useSWR<T>(url, url => twitchApiFetcher(url, headers));
};

export const useTwitchUsers = () => {
  return useTwitchApi<TwitchUsersResponse>('users');
};

export const useTwitchCurrentUser = () => {
  const { data } = useTwitchUsers();
  return data?.data[0];
};

export const useTwitchFollowers = () => {
  const currentUser = useTwitchCurrentUser();
  let path = null;
  if (currentUser != null) {
    const params = new URLSearchParams({ to_id: currentUser.id });
    path = `users/follows?${params}`;
  }
  return useTwitchApi<TwitchUsersFollowsResponse>(path);
};

export const useTwitchSubscriptions = () => {
  const currentUser = useTwitchCurrentUser();
  let path = null;
  if (currentUser != null) {
    const params = new URLSearchParams({ broadcaster_id: currentUser.id });
    path = `subscriptions?${params}`;
  }
  return useTwitchApi<TwitchBroadcasterSubscriptionsResponse>(path);
};
