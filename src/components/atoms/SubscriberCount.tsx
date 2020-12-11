import { useTwitchSubscriptions } from '../../hooks';

export const SubscriberCount = () => {
  const { data } = useTwitchSubscriptions();
  return <>{data?.data.length}</>;
};
