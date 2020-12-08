import { useTwitchCurrentUser } from '../../hooks/twitch';

export const UserDisplayName = () => {
  const currentUser = useTwitchCurrentUser();
  return <>{currentUser?.display_name}</>;
};
