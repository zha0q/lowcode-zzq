import {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { bindEvent, dispatchEvent as _dispatchEvent } from './event';
import { parseString } from './utils';
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
  // useEffect(() => {
  //   reaction(
  //     () => rootStore,
  //     (cur, pre) => {
  //       console.log(`cur: ${cur}, pre: ${pre}`);
  //     },
  //   );
  //   when(
  //     () => true,
  //     () => {
  //       console.log('...');
  //     },
  //   );
  // }, [rootStore.storeMap]);

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

  const dispatchEvent = async (
    e: React.MouseEvent<any>,
    data: any,
    _renderer?: React.Component<any>, // for didmount
  ): Promise<any> => {
    return await _dispatchEvent(e, renderer || _renderer, data);
  };

  const $ = useRef({
    env,
    parseTemplate,
    dispatchEvent,
    renderer,
  });
  return (
    <Component schema={schema} $={$.current}>
      {props.children}
    </Component>
  );
};

export default BaseComponent;
