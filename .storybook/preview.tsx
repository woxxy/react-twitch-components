import { TwitchContext } from '../src/components/TwitchContext';
import { Story } from '@storybook/react/types-6-0';
import mock, { followers, legacySubscriber, subscriber, users } from './mock';
import { TWITCH_API_ENDPOINT } from '../src/constants';
import { TWITCH_API_LEGACY_ENDPOINT } from '../src/constants';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story: Story) => {
    mock.restore();
    mock.mock(`${TWITCH_API_ENDPOINT}users`, users.me);
    mock.mock(`begin:${TWITCH_API_ENDPOINT}users/follows`, followers.me);
    mock.mock(`begin:${TWITCH_API_ENDPOINT}subscriptions`, subscriber.me);
    mock.mock(
      `begin:${TWITCH_API_LEGACY_ENDPOINT}channels/${users.me.data[0].id}/subscriptions`,
      legacySubscriber.me
    );

    return (
      <TwitchContext.Provider
        value={{
          accessToken: 'requests_are_mocked',
          clientId: 'requests_are_mocked',
        }}
      >
        <Story />
      </TwitchContext.Provider>
    );
  },
];
