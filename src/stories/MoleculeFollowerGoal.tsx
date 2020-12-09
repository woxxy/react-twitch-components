import { ComponentProps } from 'react';
import { FollowerGoal } from '../components/molecules';

export const MoleculeFollowerGoalStory = (
  props: ComponentProps<typeof FollowerGoal>
) => {
  return <FollowerGoal {...props} />;
};
