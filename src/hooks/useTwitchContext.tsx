import { useContext } from 'react';
import { TwitchAPIContext } from '../api/context';
import { TwitchAPIContextProps } from '../api/interfaces';

export const useTwitchContext = (): TwitchAPIContextProps =>
  useContext(TwitchAPIContext) as TwitchAPIContextProps;
