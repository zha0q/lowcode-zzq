import { observer, useLocalObservable } from 'mobx-react-lite';
import React from 'react';

export interface IMaterialsMapValue {
  type: string;
  ref: HTMLDivElement;
}

export const RefStoreContext = React.createContext(null) as any;

function RefStore(props: { children: any }) {
  const refContext = useLocalObservable(() => ({
    materialsMap: new Map<string, IMaterialsMapValue>(),

    addRef(id: string, type: string, ref: HTMLDivElement) {
      this.materialsMap.set(id, { type, ref });
    },

    offRef(id: string) {
      this.materialsMap.delete(id);
    },
  }));

  return (
    <RefStoreContext.Provider value={refContext}>
      {props.children}
    </RefStoreContext.Provider>
  );
}

export default observer(RefStore);
