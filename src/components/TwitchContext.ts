import { createContext, useContext } from 'react';

// TODO: what should be stored in the context?
// maybe auth token/client id/other auth stuff?
// https://dev.twitch.tv/docs/api
type TwitchContextValue = undefined;

export const TwitchContext = createContext<TwitchContextValue>(undefined);

export const useTwitchContext = () => {
  const context = useContext(TwitchContext);

  if (context === undefined) {
    throw new Error('useTwitchContext must be used within a TwitchProvider');
  }

  return context;
};
