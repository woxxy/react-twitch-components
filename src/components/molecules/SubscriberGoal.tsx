import { useTwitchSubscriptions } from '../../hooks';
import { LoadingBarClassNames, LoadingBar } from './internal/LoadingBar';

interface SubscriberGoalProps {
  goal: number;
  classNames?: LoadingBarClassNames;
}

export const SubscriberGoal = ({ goal, classNames }: SubscriberGoalProps) => {
  const { data } = useTwitchSubscriptions();

  if (data == null) {
    return null;
  }

  return (
    <LoadingBar goal={goal} count={data.data.length} classNames={classNames} />
  );
};
