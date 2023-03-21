import { useContext, useEffect } from 'react';
import { RootStoreContext } from './DataContext';
import { EnvContext } from './EnvContext';
import { autorun, toJS } from 'mobx';
import { flattenSchemaData } from './utils';

export const RootRenderer = (props: any) => {
  const { schema, render } = props;
  const rootStore = useContext(RootStoreContext) as any;
  const { env } = useContext(EnvContext) as any;

  // TODO: Error拦截
  if (env.isError) {
    return () => {};
  }

  useEffect(() => {
    const flatedSchema = flattenSchemaData(schema);
    flatedSchema.forEach((_schema: any) => {
      rootStore.addStore({
        id: _schema.id,
        path: _schema.path,
        data: _schema.data,
      });
    });
  }, []);

  const handleAction = (e: Event, action: any, rootStore: any) => {
    if (
      action.actionType === 'url' ||
      action.actionType === 'link' ||
      action.actionType === 'jump'
    ) {
      if (!env || !env.jumpTo) {
        throw new Error('env.jumpTo is required!');
      }

      env.jumpTo(action.to, action);
    }
  };

  return render(schema, { env, rootStore, handleAction });
};
