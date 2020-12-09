import { ComponentProps } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { MoleculeSubscriberGoalStory } from './MoleculeSubscriberGoal';
import mock, { subscriber, users } from './mock';
import { TWITCH_API_ENDPOINT } from '../constants';

export default {
  title: 'Molecule/SubcriberGoal',
  component: MoleculeSubscriberGoalStory,
  argTypes: {},
} as Meta;

const Template: Story<
  ComponentProps<typeof MoleculeSubscriberGoalStory>
> = args => {
  mock.restore();
  mock.mock(`${TWITCH_API_ENDPOINT}users`, users.me);
  mock.mock(`begin:${TWITCH_API_ENDPOINT}subscriptions`, subscriber.me);

  return <MoleculeSubscriberGoalStory {...args} />;
};

export const Base = Template.bind({});
Base.args = {
  goal: 128,
};
