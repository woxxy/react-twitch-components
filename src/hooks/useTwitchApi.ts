import useSWR from 'swr';
import { useTwitchContext } from '../components/TwitchContext';
import { TWITCH_API_ENDPOINT } from '../constants';

const requestInit: RequestInit = {
  method: 'GET',
  mode: 'cors',
  cache: 'no-store',
};

const twitchApiFetcher = async <T>(
  url: string,
  headers: HeadersInit
): Promise<T> => {
  const response = await fetch(url, { ...requestInit, headers });
  return response.json();
};

export const useTwitchApi = <T>(path: string | null) => {
  const { accessToken, clientId } = useTwitchContext();
  const url = path === null ? null : `${TWITCH_API_ENDPOINT}${path}`;
  const headers: HeadersInit = {
    'client-id': clientId,
    Authorization: `Bearer ${accessToken}`,
  };
  return useSWR<T>(url, url => twitchApiFetcher(url, headers), {
    refreshInterval: 10000,
  });
};
