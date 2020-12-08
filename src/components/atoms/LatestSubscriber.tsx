import { useTwitchSubscriptions } from '../../hooks/twitch';

export const LatestSubscriber = () => {
  const { data } = useTwitchSubscriptions();
  return <>{data?.data[0]?.user_name}</>;
};
