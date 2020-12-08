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
