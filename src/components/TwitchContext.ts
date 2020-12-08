import { createContext, useContext } from 'react';

// TODO: what else should be stored in the context?
interface TwitchContextValue {
  accessToken: string;
  clientId: string;
}

export const TwitchContext = createContext<TwitchContextValue | undefined>(
  undefined
);

export const useTwitchContext = () => {
  const context = useContext(TwitchContext);

  if (context === undefined) {
    throw new Error('useTwitchContext must be used within a TwitchProvider');
  }

  return context;
};
