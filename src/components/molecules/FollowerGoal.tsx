import React, { FC } from 'react';
import { useTwitchApi } from '../../hooks/useTwitchApi';
import { TwitchUsersFollowsResponse } from '../../interfaces';
import { useTwitchCurrentUser } from '../../hooks/useTwitchCurrentUser';
import { LoadingBarClassNames, LoadingBar } from './internal/LoadingBar';

export const FollowerGoal: FC<{
  goal: number;
  classNames?: LoadingBarClassNames;
}> = ({ goal, classNames }) => {
  const { currentUser } = useTwitchCurrentUser();

  const [, result] = useTwitchApi<TwitchUsersFollowsResponse>(
    'users/follows',
    { toId: currentUser.id },
    [currentUser]
  );

  if (!result) {
    return null;
  }

  return (
    <LoadingBar goal={goal} count={result.total} classNames={classNames} />
  );
};
