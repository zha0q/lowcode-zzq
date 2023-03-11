import { memo, useContext } from 'react';
import { Context } from './DataContext';

const BaseComponent: React.FC<any> = memo(
  (props: any) => {
    const ctx = useContext(Context);
    const { Component, schema } = props;
    return <Component {...schema} ctx={ctx}>{props.children}</Component>;
  },
  (prev: any, curr: any) => {
    return prev.data === curr.data;
  },
);

export default BaseComponent;
