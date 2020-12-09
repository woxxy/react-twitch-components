// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { UserDisplayNameStory } from './UserDisplayName';
import mock, { users } from './mock';

export default {
  title: 'atoms/UserDisplayName',
  component: UserDisplayNameStory,
  argTypes: {},
} as Meta;

const Template: Story = () => {
  mock.restore().mock('*', users.me);
  return <UserDisplayNameStory />;
};

export const Base = Template.bind({});
Base.args = {};
