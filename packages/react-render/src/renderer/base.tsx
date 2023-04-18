import {
  memo,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { bindEvent, dispatchEvent as _dispatchEvent } from './event';
import { parseString } from './utils';
import { observer } from 'mobx-react-lite';
import { RefStoreContext } from '../store/RefContext';

const BaseComponent: React.FC<any> = (props: any) => {
  const { Component, schema, rootStore, env } = props;
  const renderer = {
    props,
  };

  const { addRef, offRef } = useContext(RefStoreContext) as any;
  const componentRef = useRef(HTMLDivElement);

  // 绑定ref
  // 这里需要加依赖项，否则Page组件不会重渲染,没重渲染的话但是refContext中的page的ref是以前的ref，取Rect全部为0
  useEffect(() => {
    //TODO: 兼容一个bug：BaseComponent收集ref时 父子关系的组件有可能收集顺序不同，导致子组件未渲染完成的时候获取rect？？
    setTimeout(() => {
      addRef(schema.path, schema.componentType, componentRef.current);
    });
    return () => offRef(schema.id);
  }, [schema]);

  // schema中的data改变时
  useEffect(() => {
    const store = rootStore.getStore(schema.id);
    Object.keys(store?.data ?? {})?.forEach((key: string) => {
      if (schema.data[key] !== store?.data[key]) {
        rootStore.setValue(store.id, key, schema.data[key]);
      }
    });
  }, [schema]);

  // 渲染器事件绑定
  useEffect(() => {
    const unBindEvent = bindEvent(renderer);
    return () => {
      unBindEvent();
    };
  }, [schema.onEvent]);

  const parseTemplate = (text: string) => {
    return parseString(text, rootStore.getValue(schema.id));
  };

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
    <Component ref={componentRef} schema={schema} $={$.current}>
      {props.children}
    </Component>
  );
};

export default BaseComponent;
