import { ComponentProps } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import mock, { followers, users } from './mock';
import { TWITCH_API_ENDPOINT } from '../constants';
import { FollowerGoal } from '../components/molecules';

export default {
  title: 'Molecule/FollowerGoal',
  component: FollowerGoal,
  argTypes: {},
} as Meta;

const Template: Story<ComponentProps<typeof FollowerGoal>> = args => {
  mock.restore();
  mock.mock(`${TWITCH_API_ENDPOINT}users`, users.me);
  mock.mock(`begin:${TWITCH_API_ENDPOINT}users/follows`, followers.me);

  return <FollowerGoal {...args} />;
};

export const Base = Template.bind({});
Base.args = {
  goal: 128,
};
