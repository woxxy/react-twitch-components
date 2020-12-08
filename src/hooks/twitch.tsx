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

const useTwitchApi = <T extends TwitchResponses>(path: string | null) => {
  const url =
    accessToken === null || path === null
      ? null
      : `${TWITCH_API_ENDPOINT}${path}`;
  return useSWR<T>(url, twitchApiFetcher);
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
