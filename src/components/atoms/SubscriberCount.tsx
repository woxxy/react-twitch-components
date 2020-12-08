import { useTwitchApi } from '../../hooks/useTwitchApi';
import { TwitchBroadcasterSubscriptionsResponse } from '../../interfaces';
import { useTwitchCurrentUser } from '../../hooks/useTwitchCurrentUser';

export const SubscriberCount = () => {
  const { currentUser } = useTwitchCurrentUser();

  const [, result] = useTwitchApi<TwitchBroadcasterSubscriptionsResponse>(
    'subscriptions',
    { broadcasterId: currentUser.id },
    [currentUser]
  );

  if (!result) {
    return null;
  }

  return <>{result.data.length}</>;
};
