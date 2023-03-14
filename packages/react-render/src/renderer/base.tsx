import { memo, useContext } from 'react';
import { Context } from './DataContext';
import { parseString } from './utils';

const BaseComponent: React.FC<any> = (props: any) => {
  const ctx = useContext(Context) as any;
  const { Component, schema } = props;
  const parseTemplate = (text: string) => {
    return parseString(text, ctx.getValue(schema.path));
  };
  const tool = {
    parseTemplate,
  };
  return (
    <Component schema={schema} $={tool}>
      {props.children}
    </Component>
  );
};

export default BaseComponent;
