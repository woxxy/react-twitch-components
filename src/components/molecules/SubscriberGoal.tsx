import { useTwitchApi } from '../../hooks/useTwitchApi';
import { TwitchBroadcasterSubscriptionsResponse } from '../../interfaces';
import { useTwitchCurrentUser } from '../../hooks/useTwitchCurrentUser';
import { LoadingBarClassNames, LoadingBar } from './internal/LoadingBar';

interface SubscriberGoalProps {
  goal: number;
  classNames?: LoadingBarClassNames;
}

export const SubscriberGoal = ({ goal, classNames }: SubscriberGoalProps) => {
  const { currentUser } = useTwitchCurrentUser();

  const [, result] = useTwitchApi<TwitchBroadcasterSubscriptionsResponse>(
    'subscriptions',
    { broadcasterId: currentUser.id },
    [currentUser]
  );

  if (!result) {
    return null;
  }

  return (
    <LoadingBar
      goal={goal}
      count={result.data.length}
      classNames={classNames}
    />
  );
};
