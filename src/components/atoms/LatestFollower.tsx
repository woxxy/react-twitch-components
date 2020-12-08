import { FC } from 'react';
import { useTwitchApi } from '../../hooks/useTwitchApi';
import { TwitchUsersFollowsResponse } from '../../interfaces';
import { useTwitchCurrentUser } from '../../hooks/useTwitchCurrentUser';

export const LatestFollower: FC<{ indexFromLatest?: number }> = ({
  indexFromLatest = 0,
}) => {
  const { currentUser } = useTwitchCurrentUser();

  const [, result] = useTwitchApi<TwitchUsersFollowsResponse>(
    'users/follows',
    { toId: currentUser.id },
    [currentUser]
  );

  if (!result) {
    return null;
  }

  return <>{result.data[indexFromLatest].fromName}</>;
};
