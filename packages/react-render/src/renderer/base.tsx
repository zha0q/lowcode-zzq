import { memo, useContext, useEffect, useState } from 'react';
import { DataContext } from './DataContext';
import { bindEvent, dispatchEvent } from './event';
import { parseString } from './utils';

const BaseComponent: React.FC<any> = (props: any) => {
  const { Component, schema, ctx, env } = props;

  const renderer = {
    props,
  }

  // 渲染器事件绑定
  useEffect(() => {
    const unBindEvent = bindEvent(renderer);
    return () => {
      unBindEvent();
    }
  }, [schema.onEvent]);

  const parseTemplate = (text: string) => {
    return parseString(text, ctx.getValue(schema.path));
  };

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

export default BaseComponent;
