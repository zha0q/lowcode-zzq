import { dynamic } from 'umi';
import BaseComponent from './base';
import { RootRenderer } from './RootRenderer';
import { DataContext } from './DataContext';
import { memo, useMemo } from 'react';

const dynamicComponentImported = new Map();

const DynamicFunc = (type: string, componentType: string) => {
  return dynamic({
    loader: async function () {
      const { default: Graph } = await import(
        `@/components/${componentType}/${type}`
      );
      const Component = Graph;
      return (props: any) => {
        return (
          <BaseComponent Component={Component} {...props}>
            {renderChild(props.schema.body)}
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
  return <Dynamic {...props} />;
};

export default memo(
  (props: any) => (
    <DataContext>
      <RootRenderer {...props} render={renderChild} />
    </DataContext>
  ),
  (prev: any, curr: any) => {
    return prev.schema === curr.schema;
  },
);

export const renderChild = (schema: any) => {
  if (!schema) return;
  if (Array.isArray(schema)) return renderChilden(schema);
  return <DynamicRenderer key={schema.id} schema={schema} />;
};

export const renderChilden: any = (schema: any) => {
  if (Array.isArray(schema))
    return schema.map((_schema: any) => {
      return renderChild(_schema);
    });
  return renderChild(schema);
};
