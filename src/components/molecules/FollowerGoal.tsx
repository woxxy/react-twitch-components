import { useTwitchApi } from '../../hooks/useTwitchApi';
import { TwitchUsersFollowsResponse } from '../../interfaces';
import { useTwitchCurrentUser } from '../../hooks/useTwitchCurrentUser';
import { LoadingBarClassNames, LoadingBar } from './internal/LoadingBar';

interface FollowerGoalProps {
  goal: number;
  classNames?: LoadingBarClassNames;
}

export const FollowerGoal = ({ goal, classNames }: FollowerGoalProps) => {
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
