import { TWITCH_CLIENT_ID } from '../constants';

const oauthParams = new URLSearchParams({
  client_id: TWITCH_CLIENT_ID,
  redirect_uri: 'http://localhost:3000',
  response_type: 'token',
  scope: ['user:read:email', 'channel:read:subscriptions'].join(' '),
});

const oauthUrl = `https://id.twitch.tv/oauth2/authorize?${oauthParams}`;

export const redirectForToken = (): void => {
  window.location.replace(oauthUrl);
};
