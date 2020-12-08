import { useContext } from 'react';
import { TwitchAPIContext } from '../api/context';
import { TwitchAPIContextProps } from '../api/interfaces';

export const useTwitchContext = (): TwitchAPIContextProps => {
  const context = useContext(TwitchAPIContext);

  if (context === undefined) {
    throw new Error('useTwitchContext must be used within a TwitchProvider');
  }

  return context;
};
