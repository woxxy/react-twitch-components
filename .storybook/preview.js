import { TwitchContext } from '../src/components/TwitchContext';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  Story => (
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
