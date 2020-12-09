import { TwitchContext } from '../src/components/TwitchContext';
import React from 'react';

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
