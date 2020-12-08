import { TwitchProvider } from '../components/TwitchProvider';
import { UserDisplayName } from '../components/atoms/UserDisplayName';

export const UserDisplayNameStory = () => {
  return (
    <TwitchProvider>
      <UserDisplayName />
    </TwitchProvider>
  );
};
