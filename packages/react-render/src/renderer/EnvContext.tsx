import React from 'react';
import { defaultOptions } from './envOptions';

export const EnvContext = React.createContext({});

export function EnvContextProvider({ children }: { children: any }) {
  const env = defaultOptions;

  const ctx = {
    env,
  }

  return <EnvContext.Provider value={ctx}>{children}</EnvContext.Provider>;
}
