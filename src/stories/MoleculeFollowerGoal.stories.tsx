import { ComponentProps } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { MoleculeFollowerGoalStory } from './MoleculeFollowerGoal';

export default {
  title: 'Molecule/FollowerGoal',
  component: MoleculeFollowerGoalStory,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<
  ComponentProps<typeof MoleculeFollowerGoalStory>
> = args => <MoleculeFollowerGoalStory {...args} />;

export const Base = Template.bind({});
Base.args = {
  goal: 128,
};
