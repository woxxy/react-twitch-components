import { useContext } from 'react';
import { TwitchCurrentUserContext } from '../currentUser/context';

export const useTwitchCurrentUser = () => {
  const context = useContext(TwitchCurrentUserContext);

  if (context === undefined) {
    throw new Error(
      'useTwitchCurrentUser must be used within a TwitchProvider'
    );
  }

  return context;
};
