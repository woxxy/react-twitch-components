import { redirectForToken } from '../api/helpers';
import { TwitchAPIProvider } from '../api/Provider';
import { TwitchCurrentUserProvider } from '../currentUser/Provider';

export const TwitchProvider = ({ children }: { children: React.ReactNode }) => {
  const hashParams = new URLSearchParams(document.location.hash.substr(1));
  const accessToken = hashParams.get('access_token');

  if (!accessToken) {
    redirectForToken();
    return null;
  }

  return (
    <TwitchAPIProvider accessToken={accessToken}>
      <TwitchCurrentUserProvider>{children}</TwitchCurrentUserProvider>
    </TwitchAPIProvider>
  );
};
