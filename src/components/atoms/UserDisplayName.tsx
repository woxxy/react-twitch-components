import { useTwitchCurrentUser } from '../../hooks';

export const UserDisplayName = () => {
  const currentUser = useTwitchCurrentUser();
  return <>{currentUser?.display_name}</>;
};
