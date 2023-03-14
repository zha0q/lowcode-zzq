import React from 'react';
import { useImmer } from 'use-immer';
import { generateData } from './utils';

export const Context = React.createContext({});

export function DataContext({ children }: { children: any }) {
  const [data, setData] = useImmer({
    child: {},
    data: {},
  });

  const initData = (schema: any) => {
    setData(draft => {
      draft.child = {
        ...draft.child,
        [schema.id]: generateData(schema, (draft as any).child[schema.id]),
      }
    });
  };

  const getValue = (path: string) => (key: string) => {
    let scopedData = {} as any;
    const chain = path.split('/');
    let ret = data as any;
    if (ret.data[key] !== undefined) {
      scopedData[key] = ret.data[key];
      scopedData = Object.create(scopedData);
    }
    chain.forEach((id) => {
      ret = ret.child[id];
      if (ret.data && ret.data[key] !== undefined) {
        scopedData[key] = ret.data[key];
        scopedData = Object.create(scopedData);
      }
    });
    return scopedData[key];
  };

  const setValue = (path: string, key: string, value: any) => {
    const chain = path.split('/');
    setData((draft) => {
      let tmp = draft as any;
      chain.forEach((id) => {
        tmp = tmp.child[id];
      });
      tmp[key] = value;
    });
  };

  const ctx = {
    data,
    initData,
    getValue,
    setValue,
  };
  return <Context.Provider value={ctx}>{children}</Context.Provider>;
}
