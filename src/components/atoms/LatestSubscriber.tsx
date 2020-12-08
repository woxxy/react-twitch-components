import { useTwitchApi } from '../../hooks/useTwitchApi';
import { TwitchBroadcasterSubscriptionsResponse } from '../../interfaces';
import { useTwitchCurrentUser } from '../../hooks/useTwitchCurrentUser';

export const LatestSubscriber = () => {
  const { currentUser } = useTwitchCurrentUser();

  const [, result] = useTwitchApi<TwitchBroadcasterSubscriptionsResponse>(
    'subscriptions',
    { broadcasterId: currentUser.id },
    [currentUser]
  );

  if (!result) {
    return null;
  }

  if (!result.data.length) {
    return null;
  }

  return <>{result.data[0].userName}</>;
};
