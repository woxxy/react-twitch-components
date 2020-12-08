import { redirectForToken } from '../api/helpers';
import { useTwitchUsers } from '../hooks/twitch';
import { TwitchContext } from './TwitchContext';

const clientId = '9031tpad4quocef3dgtu0bbnbupmdr';

export const TwitchProvider = ({ children }: { children: React.ReactNode }) => {
  const hashParams = new URLSearchParams(document.location.hash.substr(1));
  const accessToken = hashParams.get('access_token');
  const { data } = useTwitchUsers();

  if (!accessToken) {
    redirectForToken();
    return null;
  }

  if (data == null) return null;

  return (
    <TwitchContext.Provider
      value={{
        accessToken,
        clientId,
      }}
    >
      {children}
    </TwitchContext.Provider>
  );
};
