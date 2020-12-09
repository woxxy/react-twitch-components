import { useTwitchSubscriptions } from '../../hooks';

export const LatestSubscriber = () => {
  const { data } = useTwitchSubscriptions();
  return <>{data?.data[0]?.user_name}</>;
};
