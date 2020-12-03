import React, { FC } from 'react';
import { TwitchUsersResponse } from '../interfaces';
import { TwitchCurrentUserContext } from './context';
import { useTwitchApi } from '../hooks/useTwitchApi';

export const TwitchCurrentUserProvider: FC = ({ children }) => {
  const [, result] = useTwitchApi<TwitchUsersResponse>('users', {}, [], null);

  if (!result) {
    return null;
  }

  return (
    <TwitchCurrentUserContext.Provider value={{ currentUser: result.data[0] }}>
      {children}
    </TwitchCurrentUserContext.Provider>
  );
};
