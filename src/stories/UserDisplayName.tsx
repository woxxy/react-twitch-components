import React from 'react';
import { TwitchProvider } from '../components/TwitchProvider';
import { UserDisplayName } from '../components/atoms/UserDisplayName';

export const UserDisplayNameStory: React.FC = () => {
  return (
    <TwitchProvider>
      <UserDisplayName />
    </TwitchProvider>
  );
};
