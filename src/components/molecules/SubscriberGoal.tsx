import { LoadingBarClassNames, LoadingBar } from './internal/LoadingBar';
import { useTwitchLegacySubscriptions } from '../../hooks/useTwitchLegacySubscriptions';

interface SubscriberGoalProps {
  goal: number;
  classNames?: LoadingBarClassNames;
}

export const SubscriberGoal = ({ goal, classNames }: SubscriberGoalProps) => {
  const { data } = useTwitchLegacySubscriptions();

  if (data == null) {
    return null;
  }

  return <LoadingBar goal={goal} count={data._total} classNames={classNames} />;
};
