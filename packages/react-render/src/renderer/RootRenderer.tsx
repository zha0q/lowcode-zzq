import { useContext, useEffect } from 'react';
import { Context } from './DataContext';

export const RootRenderer = (props: any) => {
  const { schema, render } = props;
  const { initData } = useContext(Context) as any;
  useEffect(() => {
      initData(schema);
  }, [schema]);
  return render(props.schema);
};
