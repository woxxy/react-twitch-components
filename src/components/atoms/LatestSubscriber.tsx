import { useTwitchLegacySubscriptions } from '../../hooks/useTwitchLegacySubscriptions';

export const LatestSubscriber = () => {
  const { data } = useTwitchLegacySubscriptions();
  return <>{data?.subscriptions[0].user.display_name}</>;
};
