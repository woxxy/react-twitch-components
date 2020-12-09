import { useTwitchCurrentUser } from './useTwitchCurrentUser';
import { useTwitchApi } from './useTwitchApi';
import { TwitchPagination } from '../interfaces';

interface TwitchUsersFollows {
  from_id: string;
  from_name: string;
  to_id: string;
  to_name: string;
  followed_at: string;
}

interface TwitchUsersFollowsResponse {
  total: number;
  data: readonly TwitchUsersFollows[];
  pagination: TwitchPagination;
}

/**
 * https://dev.twitch.tv/docs/api/reference#get-users-follows
 */
export const useTwitchFollowers = () => {
  const currentUser = useTwitchCurrentUser();
  let path = null;
  if (currentUser != null) {
    const params = new URLSearchParams({ to_id: currentUser.id });
    path = `users/follows?${params}`;
  }
  return useTwitchApi<TwitchUsersFollowsResponse>(path);
};
