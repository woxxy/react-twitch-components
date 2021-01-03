import { useTwitchLegacySubscriptions } from '../../hooks/useTwitchLegacySubscriptions';

export const SubscriberCount = () => {
  const { data } = useTwitchLegacySubscriptions();
  return <>{data?._total}</>;
};
