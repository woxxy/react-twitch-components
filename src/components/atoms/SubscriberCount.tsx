import { useTwitchSubscriptions } from '../../hooks/twitch';

export const SubscriberCount = () => {
  const { data } = useTwitchSubscriptions();
  return <>{data?.data.length}</>;
};
