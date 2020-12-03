import { createContext } from 'react';
import { TwitchAPIContextProps } from './interfaces';

export const TwitchAPIContext = createContext<
  TwitchAPIContextProps | undefined
>(undefined);
