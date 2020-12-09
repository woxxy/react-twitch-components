import { useTwitchFollowers } from '../../hooks/twitch';
import { LoadingBarClassNames, LoadingBar } from './internal/LoadingBar';

interface FollowerGoalProps {
  goal: number;
  classNames?: LoadingBarClassNames;
}

export const FollowerGoal = ({ goal, classNames }: FollowerGoalProps) => {
  const { data } = useTwitchFollowers();

  if (data == null) {
    return null;
  }

  return <LoadingBar goal={goal} count={data.total} classNames={classNames} />;
};
