import { useTwitchCurrentUser } from './useTwitchCurrentUser';
import { useLegacyTwitchApi } from './useTwitchApi';

interface TwitchLegacyUser {
  _id: string;
  bio: string;
  created_at: string;
  display_name: string;
  logo: string;
  name: string;
  type: string;
  updated_at: string;
}

interface TwitchLegacyChannelSubscriptions {
  _id: string;
  created_at: string;
  sub_plan: '1000' | '2000' | '3000';
  sub_plan_name: string;
  is_gift: boolean; // not declared in docs
  user: TwitchLegacyUser;
  sender: null; // not declared in docs
}

export interface TwitchLegacyChannelSubscriptionsResponse {
  _total: number;
  subscriptions: readonly TwitchLegacyChannelSubscriptions[];
}

/**
 * Legacy API, this is currently offering totals and ordering that the latest API isn't
 * https://dev.twitch.tv/docs/v5/reference/channels#get-channel-subscribers
 */
export const useTwitchLegacySubscriptions = () => {
  const currentUser = useTwitchCurrentUser();
  let path = null;
  if (currentUser != null) {
    path = `channels/${currentUser.id}/subscriptions?direction=desc&limit=1`;
  }
  return useLegacyTwitchApi<TwitchLegacyChannelSubscriptionsResponse>(path);
};
