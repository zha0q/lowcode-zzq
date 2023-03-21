import { memo, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { bindEvent, dispatchEvent } from './event';
import { parseString } from './utils';
import { reaction, toJS, when, autorun } from 'mobx';
import { observer } from 'mobx-react-lite';

const BaseComponent: React.FC<any> = (props: any) => {
  const { Component, schema, rootStore, env } = props;
  const renderer = {
    props,
  };

  // schema中的data改变时
  useEffect(() => {
    const store = rootStore.getStore(schema.id);
    Object.keys(store?.data ?? {})?.forEach((key: string) => {
      if (schema.data[key] !== store?.data[key]) {
        rootStore.setValue(store.id, key, schema.data[key]);
      }
    });
  }, [schema.data]);

  // 当前数据域响应
  useEffect(() => {
    console.log(123344);
    reaction(
      () => rootStore,
      (cur, pre) => {
        console.log(`cur: ${cur}, pre: ${pre}`);
      },
    );
    when(
      () => true,
      () => {
        console.log('...');
      },
    );
  }, [rootStore.storeMap]);

  // 渲染器事件绑定
  useEffect(() => {
    const unBindEvent = bindEvent(renderer);
    return () => {
      unBindEvent();
    };
  }, [schema.onEvent]);

  const parseTemplate = useCallback(
    (text: string) => {
      return parseString(text, rootStore.getValue(schema.id));
    },
    [rootStore.storeMap],
  );

  const $ = {
    env,
    parseTemplate,
    dispatchEvent,
    renderer,
  };
  return (
    <Component schema={schema} $={$}>
      {props.children}
    </Component>
  );
};

export default memo(
  BaseComponent,
  (prev: any, curr: any) =>
    prev.schema === curr.schema && prev.rootStore === curr.rootStore,
);
