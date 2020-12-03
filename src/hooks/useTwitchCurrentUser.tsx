import { useContext } from 'react';
import { TwitchCurrentUserContext } from '../currentUser/context';
import { TwitchCurrentUserProps } from '../currentUser/interfaces';

export const useTwitchCurrentUser = (): TwitchCurrentUserProps =>
  useContext(TwitchCurrentUserContext) as TwitchCurrentUserProps;
