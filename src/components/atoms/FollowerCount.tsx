import { FC } from 'react';
import { useTwitchApi } from '../../hooks/useTwitchApi';
import { TwitchUsersFollowsResponse } from '../../interfaces';
import { useTwitchCurrentUser } from '../../hooks/useTwitchCurrentUser';

export const FollowerCount: FC = () => {
  const { currentUser } = useTwitchCurrentUser();

  const [, result] = useTwitchApi<TwitchUsersFollowsResponse>(
    'users/follows',
    { toId: currentUser.id },
    [currentUser]
  );

  if (!result) {
    return null;
  }

  return <>{result.total}</>;
};
