import { useTwitchUsers } from './useTwitchUsers';

export const useTwitchCurrentUser = () => {
  const { data } = useTwitchUsers();
  return data?.data[0];
};
