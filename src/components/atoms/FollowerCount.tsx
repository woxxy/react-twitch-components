import { useTwitchFollowers } from '../../hooks/twitch';

export const FollowerCount = () => {
  const { data } = useTwitchFollowers();
  return <>{data?.total}</>;
};
