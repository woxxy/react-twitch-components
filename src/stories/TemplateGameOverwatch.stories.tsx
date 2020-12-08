// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { TemplateGameOverwatchStory } from './TemplateGameOverwatch';

export default {
  title: 'template/Overwatch',
  component: TemplateGameOverwatchStory,
  argTypes: {},
} as Meta;

const Template: Story = () => <TemplateGameOverwatchStory />;

export const Base = Template.bind({});
Base.args = {};
