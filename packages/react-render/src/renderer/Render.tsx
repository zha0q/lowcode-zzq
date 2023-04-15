import { dynamic } from 'umi';
import BaseComponent from './base';
import { RootRenderer } from './RootRenderer';
import { memo, useMemo, useRef } from 'react';
import RootStore from './DataContext';
import EnvStore from './EnvContext';
import { observer } from 'mobx-react-lite';

const dynamicComponentImported = new Map();

const DynamicFunc = (type: string, componentType: string) => {
  // TODO: 组件undefined处理
  if (!type || !componentType) return () => <></>;
  return dynamic({
    loader: async function () {
      const { default: Graph } = await import(
        `@/components/${componentType}/${type}`
      );
      const Component = Graph;
      return (props: any) => {
        const { schema, ...rest } = props;
        return (
          <BaseComponent Component={observer(Component)} {...props}>
            {renderChild(schema.body, rest)}
          </BaseComponent>
        );
      };
    },
  });
};
const DynamicRenderer = (props: any) => {
  const { type, componentType } = props.schema;
  if (!dynamicComponentImported.has(`${componentType}/${type}`)) {
    dynamicComponentImported.set(
      `${componentType}/${type}`,
      DynamicFunc(type, componentType),
    );
  }
  const Dynamic = dynamicComponentImported.get(`${componentType}/${type}`);
  return <Dynamic schema={props.schema} {...props} />;
};

export default (props: any) => (
  <RootStore>
    <EnvStore>
      <RootRenderer schema={props.schema} render={renderChild} />
    </EnvStore>
  </RootStore>
);

export const renderChild = (schema: any, props: any) => {
  if (!schema) return;
  if (Array.isArray(schema)) return renderChilden(schema, props);
  return <DynamicRenderer key={schema.id} schema={schema} {...props} />;
};

export const renderChilden: any = (schema: any, props: any) => {
  if (Array.isArray(schema))
    return schema.map((_schema: any) => {
      return renderChild(_schema, props);
    });
  return renderChild(schema, props);
};
