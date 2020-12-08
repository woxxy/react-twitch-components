import { useTwitchCurrentUser } from '../../hooks/useTwitchCurrentUser';

export const UserDisplayName = () => {
  const { currentUser } = useTwitchCurrentUser();
  return <>{currentUser.display_name}</>;
};
