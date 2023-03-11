import React from 'react';
import { useImmer } from 'use-immer';

export const Context = React.createContext({});

const generateData = (schema: any) => {
  const { route, body, data: schemaData } = schema;
  return {
    child: body.reduce((result: any, childSchema: any) => {
      result[childSchema.id] = generateData(childSchema);
      return result;
    }, {}),
    data: schemaData,
  };
};

export function DataContext({ children }: { children: any }) {
  const [data, setData] = useImmer({
    child: {},
    data: {},
  });

  const initData = (schema: any) => {
    setData(draft => {
      draft.child = {
        ...draft.child,
        [schema.id]: generateData(schema),
      }
    });
  };

  const getValue = (route: string) => (key: string) => {
    let scopedData = {} as any;
    const chain = route.split('/');
    let ret = data as any;
    console.log('ret', data);
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

  const setValue = (route: string, key: string, value: any) => {
    const chain = route.split('/');
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
