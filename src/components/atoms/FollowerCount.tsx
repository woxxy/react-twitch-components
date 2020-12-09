import { useTwitchFollowers } from '../../hooks';

export const FollowerCount = () => {
  const { data } = useTwitchFollowers();
  return <>{data?.total}</>;
};
