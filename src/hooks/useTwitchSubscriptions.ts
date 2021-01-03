import { useTwitchCurrentUser } from './useTwitchCurrentUser';
import { useTwitchApi } from './useTwitchApi';
import { TwitchPagination } from '../interfaces';

interface TwitchBroadcasterSubscriber {
  broadcaster_id: string;
  broadcaster_name: string;
  is_gift: boolean;
  gifter_name: string; // not declared in docs
  gifter_id: string; // not declared in docs
  tier: '1000' | '2000' | '3000';
  plan_name: string;
  user_id: string;
  user_name: string;
}

interface TwitchBroadcasterSubscriptionsResponse {
  data: readonly TwitchBroadcasterSubscriber[];
  pagination: TwitchPagination;
}

/**
 * https://dev.twitch.tv/docs/api/reference#get-broadcaster-subscriptions
 */
export const useTwitchSubscriptions = () => {
  const currentUser = useTwitchCurrentUser();
  let path = null;
  if (currentUser != null) {
    const params = new URLSearchParams({ broadcaster_id: currentUser.id });
    path = `subscriptions?${params}`;
  }
  return useTwitchApi<TwitchBroadcasterSubscriptionsResponse>(path);
};
