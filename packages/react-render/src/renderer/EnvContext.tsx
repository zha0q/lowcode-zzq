import React, { useEffect } from 'react';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { defaultOptions, overwriteEnv } from './envOptions';

export const EnvContext = React.createContext(null) as any;

function Env(props: { children: any }) {
  const rootContext = useLocalObservable(() => ({
    env: defaultOptions,

    overwriteEnv: function () {
      this.env = overwriteEnv(this.env);
    },
  }));

  useEffect(() => {
    rootContext.overwriteEnv();
  }, []);

  return (
    <EnvContext.Provider value={rootContext}>
      {props.children}
    </EnvContext.Provider>
  );
}

export default observer(Env);
