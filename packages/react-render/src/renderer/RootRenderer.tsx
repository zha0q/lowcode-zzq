import { useContext, useEffect } from 'react';
import { DataContext } from './DataContext';
import { EnvContext } from './EnvContext';

export const RootRenderer = (props: any) => {
  const { schema, render } = props;
  const ctx = useContext(DataContext) as any;
  const { env } = useContext(EnvContext) as any;

  useEffect(() => {
    ctx.initData(schema);
  }, [schema]);

  // TODO: Error拦截
  if (env.isError) {
    return () => {};
  }

  const handleAction = (e: Event, action: any, ctx: any) => {
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

  return render(props.schema, { env, ctx, handleAction });
};
