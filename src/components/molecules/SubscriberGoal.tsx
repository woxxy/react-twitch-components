import { FC } from 'react';
import { useTwitchApi } from '../../hooks/useTwitchApi';
import { TwitchBroadcasterSubscriptionsResponse } from '../../interfaces';
import { useTwitchCurrentUser } from '../../hooks/useTwitchCurrentUser';
import { LoadingBarClassNames, LoadingBar } from './internal/LoadingBar';

export const SubscriberGoal: FC<{
  goal: number;
  classNames?: LoadingBarClassNames;
}> = ({ goal, classNames }) => {
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
