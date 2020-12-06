import React, { ComponentProps } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { MoleculeSubscriberGoalStory } from './MoleculeSubscriberGoal';

export default {
  title: 'Molecule/SubcriberGoal',
  component: MoleculeSubscriberGoalStory,
  argTypes: {},
} as Meta;

const Template: Story<
  ComponentProps<typeof MoleculeSubscriberGoalStory>
> = args => <MoleculeSubscriberGoalStory {...args} />;

export const Base = Template.bind({});
Base.args = {
  goal: 128,
};
