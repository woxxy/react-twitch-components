import React, { ComponentProps, FC } from 'react';
import './button.css';
import { TwitchProvider } from '../components/TwitchProvider';
import { FollowerGoal } from '../components/molecules/FollowerGoal';

export const MoleculeFollowerGoalStory: FC<
  ComponentProps<typeof FollowerGoal>
> = props => {
  return (
    <TwitchProvider>
      <FollowerGoal {...props} />
    </TwitchProvider>
  );
};
