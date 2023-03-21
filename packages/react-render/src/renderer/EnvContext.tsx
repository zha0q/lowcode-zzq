import React from 'react';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { defaultOptions } from './envOptions';

export const EnvContext = React.createContext(null) as any;

function Env(props: { children: any }) {
  const rootContext = useLocalObservable(() => ({
    env: defaultOptions,
  }));

  return (
    <EnvContext.Provider value={rootContext}>
      {props.children}
    </EnvContext.Provider>
  );
}

export default observer(Env);
