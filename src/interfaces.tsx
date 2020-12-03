export type TwitchApiStatus =
  | 'not_fetched'
  | 'fetched'
  | 'fetching'
  | 'error'
  | 'ready_to_fetch';

export interface TwitchUser {
  id: string;
  login: string;
  displayName: string;
  type: string;
  broadcasterType: '' | 'affiliate' | 'partner';
  description: string;
  profileImageUrl: string;
  offlineImageUrl: string;
  viewCount: number;
  email: string;
}

export interface TwitchPagination {
  cursor: string;
}

export interface TwitchUsersFollows {
  fromId: string;
  fromName: string;
  toId: string;
  toName: string;
  followedAt: string;
}

export interface TwitchUsersResponse {
  data: TwitchUser[];
}

export interface TwitchUsersFollowsResponse {
  total: number;
  data: TwitchUsersFollows[];
  pagination: TwitchPagination;
}

interface TwitchBroadcasterSubscriber {
  broadcasterId: string;
  broadcasterName: string;
  isGift: boolean;
  tier: '1000' | '2000' | '3000';
  planName: string;
  userId: string;
  userName: string;
}

export interface TwitchBroadcasterSubscriptionsResponse {
  data: TwitchBroadcasterSubscriber[];
  pagination: TwitchPagination;
}

export type TwitchResponses =
  | TwitchUsersResponse
  | TwitchUsersFollowsResponse
  | TwitchBroadcasterSubscriptionsResponse;
