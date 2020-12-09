import { useTwitchApi } from './useTwitchApi';

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

interface TwitchUsersResponse {
  data: readonly TwitchUser[];
}

/**
 * https://dev.twitch.tv/docs/api/reference#get-users
 */
export const useTwitchUsers = () => {
  return useTwitchApi<TwitchUsersResponse>('users');
};
