import { observer, useLocalObservable } from 'mobx-react-lite';
import React from 'react';
import { reaction, toJS } from 'mobx';

export const RootStoreContext = React.createContext(null) as any;

// 每条数据代理拦截 每个组件使用到数据时getter订阅这条数据 这条数据删除时重新向上寻找，组件卸载时 取消订阅
function RootStore(props: { children: any }) {
  const rootContext = useLocalObservable(() => ({
    storeMap: new Map(),

    storeCount: 0,

    addStoreCount() {
      this.storeCount ++;
    },

    addStore(store: any) {
      if (this.storeMap.has(store.id)) return;
      this.storeMap.set(store.id, store);
    },

    getStore(id: string) {
      return this.storeMap.get(id);
    },

    removeStore(id: string) {
      if (this.storeMap.has(id)) this.storeMap.delete(id);
    },

    getValue(id: string) {
      return (key: string) => {
        if (!this.storeMap.has(id)) return '';
        const store = this.storeMap.get(id);
        return store.path
          .split('/')
          .reduceRight(
            (ret: any, _id: any) =>
              ret !== undefined ? ret : this.storeMap.get(_id)?.data?.[key],
            undefined,
          );
      };
    },

    setValue(id: string, key: string, value: any) {
      if (!this.storeMap.has(id)) return;
      const _store = this.storeMap.get(id);
      _store.data[key] = value;
    },
  }));

  return (
    <RootStoreContext.Provider value={rootContext}>
      {props.children}
    </RootStoreContext.Provider>
  );
}

export default observer(RootStore);
