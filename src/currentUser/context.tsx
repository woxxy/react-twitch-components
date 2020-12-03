import { createContext } from 'react';
import { TwitchCurrentUserProps } from './interfaces';

export const TwitchCurrentUserContext = createContext<
  TwitchCurrentUserProps | undefined
>(undefined);
