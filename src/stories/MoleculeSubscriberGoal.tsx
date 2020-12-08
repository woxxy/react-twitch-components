import { ComponentProps } from 'react';
import './button.css';
import { TwitchProvider } from '../components/TwitchProvider';
import { SubscriberGoal } from '../components/molecules/SubscriberGoal';

export const MoleculeSubscriberGoalStory = (
  props: ComponentProps<typeof SubscriberGoal>
) => {
  return (
    <TwitchProvider>
      <SubscriberGoal {...props} />
    </TwitchProvider>
  );
};
