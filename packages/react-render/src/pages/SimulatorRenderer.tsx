import { Renderer } from '../renderer/index';
import { useContext, useEffect, useState } from 'react';
import RefStore, { RefStoreContext } from '../store/RefContext';
import { Calculator } from './Calculator';

interface IEditorEvent extends MessageEvent<any> {
  data: {
    type: 'drop' | 'hover' | 'drag-start';
    data?: any;
  };
}

const example = {
  componentType: 'box',
  type: 'Page',
  id: 'node_1234',
  path: 'node_1234',
  data: {
    info: '请拖拽组件到此处',
  },
  body: [
    {
      componentType: 'base',
      type: 'Text',
      id: 'node_oc42',
      path: 'node_1234/node_oc42',

      layout: {
        w: '100px',
        h: '100px',
      },
      text: '${info}！！',
      body: [],
    },
    {
      componentType: 'box',
      type: 'Div',
      id: 'node_22',
      path: 'node_1234/node_22',
      layout: {
        w: '200px',
        h: '200px'
      },
      body: [
        {
          componentType: 'base',
          type: 'Button',
          id: 'node_oc45',
          path: 'node_1234/node_22/node_oc45',
          layout: {
            w: '100px',
            h: '100px',
          },
          label: '发起请求1',
        },
      ],
    },
    {
      componentType: 'base',
      type: 'Button',
      id: 'node_oc41',
      path: 'node_1234/node_oc41',
      layout: {
        w: '100px',
        h: '100px',
        y: '20px',
      },
      label: '发起请求2',
    },
    {
      componentType: 'base',
      type: 'Button',
      id: 'node_oc46',
      path: 'node_1234/node_oc46',
      layout: {
        w: '100px',
        h: '100px',
        y: '20px',
      },
      label: '发起请求',
      onEvent: {
        click: {
          debounce: true,
          actions: [
            {
              // actionType: "link",
              actionType: 'ajax',
              args: {
                // to: "goBack",
                api: '/api/text',
              },
            },
          ],
        },
      },
    },
  ],
};

const SimulatorRenderer = () => {
  const [schema, setSchema] = useState(example);

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
                type: 'insert',
                data: calculator.calcu(ev.data.data),
              },
              '*',
            );
            break;
          case 'drop':
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
