import { ComponentProps } from 'react';
import './button.css';
import { TwitchProvider } from '../components/TwitchProvider';
import { FollowerGoal } from '../components/molecules/FollowerGoal';

export const MoleculeFollowerGoalStory = (
  props: ComponentProps<typeof FollowerGoal>
) => {
  return (
    <TwitchProvider>
      <FollowerGoal {...props} />
    </TwitchProvider>
  );
};
