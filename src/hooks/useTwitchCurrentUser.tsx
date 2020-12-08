import { useContext } from 'react';
import { TwitchCurrentUserContext } from '../currentUser/context';
import { TwitchCurrentUserProps } from '../currentUser/interfaces';

export const useTwitchCurrentUser = (): TwitchCurrentUserProps => {
  const context = useContext(TwitchCurrentUserContext);

  if (context === undefined) {
    throw new Error(
      'useTwitchCurrentUser must be used within a TwitchProvider'
    );
  }

  return context;
};
