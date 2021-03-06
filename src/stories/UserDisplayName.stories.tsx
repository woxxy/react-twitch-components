// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { UserDisplayName } from '../components/atoms';

export default {
  title: 'atoms/UserDisplayName',
  component: UserDisplayName,
  argTypes: {},
} as Meta;

const Template: Story = () => {
  return <UserDisplayName />;
};

export const Base = Template.bind({});
Base.args = {};
