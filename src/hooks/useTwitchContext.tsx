import { useContext } from 'react';
import { TwitchAPIContext } from '../api/context';

export const useTwitchContext = () => {
  const context = useContext(TwitchAPIContext);

  if (context === undefined) {
    throw new Error('useTwitchContext must be used within a TwitchProvider');
  }

  return context;
};
