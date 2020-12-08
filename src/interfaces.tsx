export type TwitchApiStatus =
  | 'not_fetched'
  | 'fetched'
  | 'fetching'
  | 'error'
  | 'ready_to_fetch';

export interface TwitchUser {
  id: string;
  login: string;
  display_name: string;
  type: 'staff' | 'admin' | 'global_mod' | '';
  broadcaster_type: '' | 'affiliate' | 'partner';
  description: string;
  profile_image_url: string;
  offline_image_url: string;
  view_count: number;
  email: string;
  created_at: string;
}

export interface TwitchPagination {
  cursor: string;
}

export interface TwitchUsersFollows {
  from_id: string;
  from_name: string;
  to_id: string;
  to_name: string;
  followed_at: string;
}

// https://dev.twitch.tv/docs/api/reference#get-users
export interface TwitchUsersResponse {
  data: readonly TwitchUser[];
}

// https://dev.twitch.tv/docs/api/reference#get-users-follows
export interface TwitchUsersFollowsResponse {
  total: number;
  data: readonly TwitchUsersFollows[];
  pagination: TwitchPagination;
}

interface TwitchBroadcasterSubscriber {
  broadcaster_id: string;
  broadcaster_name: string;
  is_gift: boolean;
  tier: '1000' | '2000' | '3000';
  plan_name: string;
  user_id: string;
  user_name: string;
}

// https://dev.twitch.tv/docs/api/reference#get-broadcaster-subscriptions
export interface TwitchBroadcasterSubscriptionsResponse {
  data: readonly TwitchBroadcasterSubscriber[];
  pagination: TwitchPagination;
}

export type TwitchResponses =
  | TwitchUsersResponse
  | TwitchUsersFollowsResponse
  | TwitchBroadcasterSubscriptionsResponse;
