import React, { FC } from 'react';
import { useTwitchCurrentUser } from '../../hooks/useTwitchCurrentUser';

export const UserDisplayName: FC = () => {
  const { currentUser } = useTwitchCurrentUser();
  return <>{currentUser.displayName}</>;
};
