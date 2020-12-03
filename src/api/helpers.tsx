import axios, { AxiosInstance } from 'axios';
import applyConverters from 'axios-case-converter';

const clientId = '9031tpad4quocef3dgtu0bbnbupmdr';

const getOauthUrl = () => {
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: 'http://localhost:3000',
    response_type: 'token',
    scope: ['user:read:email', 'channel:read:subscriptions'].join(' '),
  });

  return `https://id.twitch.tv/oauth2/authorize?${params}`;
};

export const redirectForToken = (): void => {
  window.location.replace(getOauthUrl());
};

export const getHTTPClient = (accessToken: string): AxiosInstance => {
  return applyConverters(
    axios.create({
      headers: {
        'client-id': clientId,
        Authorization: `Bearer ${accessToken}`,
      },
    })
  );
};

export const getRequestHash = (
  path: string,
  params: Record<string, string> | null
): string => {
  return JSON.stringify({ path, params });
};
