import { useContext, useEffect } from 'react';
import { dynamic } from 'umi';
import BaseComponent from './base';
import { Context, DataContext } from './DataContext';

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
            {props.schema.body &&
              props.schema.body.map((comp: any) => {
                return <DynamicRenderer key={comp.id} schema={comp} />;
              })}
          </BaseComponent>
        );
      };
    },
  });
};
const DynamicRenderer = (props: any) => {
  const { type, componentType } = props.schema;
  const Dynamic = DynamicFunc(type, componentType);
  return <Dynamic {...props} />;
};

const InitRenderer = (props: any) => {
  const { data, initData } = useContext(Context) as any;
  useEffect(() => {
    setTimeout(() => {
    }, 1000)
    initData(props.schema);
    setTimeout(() => {
      console.log('data', data)
    }, 1000)
  }, [props])
  return DynamicRenderer(props);
};

export default (props: any) => (
  <DataContext>
    <InitRenderer {...props} />
  </DataContext>
);
