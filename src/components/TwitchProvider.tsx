import { redirectForToken } from '../api/helpers';
import { TwitchContext } from './TwitchContext';
import { TWITCH_CLIENT_ID } from '../constants';

export const TwitchProvider = ({ children }: { children: React.ReactNode }) => {
  const hashParams = new URLSearchParams(document.location.hash.substr(1));
  const accessToken = hashParams.get('access_token');

  if (!accessToken) {
    redirectForToken();
    return null;
  }

  return (
    <TwitchContext.Provider
      value={{
        accessToken,
        clientId: TWITCH_CLIENT_ID,
      }}
    >
      {children}
    </TwitchContext.Provider>
  );
};
