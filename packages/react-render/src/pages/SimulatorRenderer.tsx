import { Renderer } from '../renderer/index';
import { useContext, useEffect, useState } from 'react';
import RefStore, { RefStoreContext } from '../store/RefContext';
import { Calculator } from './Calculator';

interface IEditorEvent extends MessageEvent<any> {
  data: {
    type: 'schema' | 'hover' | 'drag-start' | 'layer';
    data?: any;
  };
}


const SimulatorRenderer = () => {
  const [schema, setSchema] = useState({});

  const { materialsMap } = useContext(RefStoreContext) as any;
  useEffect(() => {
    const calculator = new Calculator();

    window.addEventListener(
      'message',
      (ev: IEditorEvent) => {
        switch (ev.data.type) {
          case 'drag-start':
            calculator.load(materialsMap);
            break;
          case 'hover':
            // 计算maskInfo 并发送回editor
            window.parent.postMessage(
              {
                type: 'paint',
                data: calculator.calcu(ev.data.data),
              },
              '*',
            );
            break;
          case 'schema':
            setSchema(JSON.parse(ev.data.data).body[0]);
            break;
          case 'layer':
            calculator.load(materialsMap);
            window.parent.postMessage(
              {
                type: 'layer',
                data: calculator.layer(ev.data.data),
              },
              '*',
            );
            break;
          default:
            break;
        }
      },
      false,
    );
  }, []);
  return <Renderer schema={schema} />;
};

export default SimulatorRenderer;
