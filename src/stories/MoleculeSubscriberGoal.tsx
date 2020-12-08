import { ComponentProps, FC } from 'react';
import './button.css';
import { TwitchProvider } from '../components/TwitchProvider';
import { SubscriberGoal } from '../components/molecules/SubscriberGoal';

export const MoleculeSubscriberGoalStory: FC<
  ComponentProps<typeof SubscriberGoal>
> = props => {
  return (
    <TwitchProvider>
      <SubscriberGoal {...props} />
    </TwitchProvider>
  );
};
