import { TwitchContext } from '../src/components/TwitchContext';
import { Story } from '@storybook/react/types-6-0';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story: Story) => (
    <TwitchContext.Provider
      value={{
        accessToken: 'requests_are_mocked',
        clientId: 'requests_are_mocked',
      }}
    >
      <Story />
    </TwitchContext.Provider>
  ),
];
