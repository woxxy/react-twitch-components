import { useTwitchFollowers } from '../../hooks';

interface LatestFollowerProps {
  indexFromLatest?: number;
}

export const LatestFollower = ({
  indexFromLatest = 0,
}: LatestFollowerProps) => {
  const { data } = useTwitchFollowers();
  return <>{data?.data[indexFromLatest]?.from_name}</>;
};
