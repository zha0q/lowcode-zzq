import { observer, useLocalObservable } from 'mobx-react-lite';
import React from 'react';
import Schema from '@/components/schema';
import { v1 as uuid } from 'uuid';
import { EventBus } from './utils';

interface ILayoutInfo {
  parentNodeId: string;
  childNodeId: string;
  parentNodeRect: DOMRect;
  childNodeRect: DOMRect;
  axis: IAxis;
}

export type IAxis = 'x' | 'y';

const example = {
  body: [
    {
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
            h: '200px',
          },
          body: [
            // {
            //   componentType: 'base',
            //   type: 'Button',
            //   id: 'node_oc45',
            //   path: 'node_1234/node_22/node_oc45',
            //   layout: {
            //     w: '150px',
            //     h: '150px',
            //   },
            //   label: '发起请求1',
            // },
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
    },
  ],
};

export const StoreContext = React.createContext(null) as any;

// 每条数据代理拦截 每个组件使用到数据时getter订阅这条数据 这条数据删除时重新向上寻找，组件卸载时 取消订阅
function Store(props: { children: any }) {
  const context = useLocalObservable(() => ({
    layoutInfo: null as any,

    setLayoutInfo(layoutInfo: ILayoutInfo) {
      this.layoutInfo = layoutInfo;
    },

    eventBus: new EventBus(),

    schema: example,

    addSchema(materials: any) {
      const parentNodePath = this.layoutInfo.parentNodeId.split('/');
      const childNodePath = this.layoutInfo.childNodeId.split('/');
      let _schema = this.schema as any;
      parentNodePath.forEach((_id: string) => {
        _schema = _schema.body.find((_comp: any) => _comp.id === _id);
      });
      const _component = Schema.find(
        (_schema) => _schema.type === materials.type,
      ).default;
      _component.id = uuid();
      _component.path = `${this.layoutInfo.parentNodeId}/${_component.id}`;
      if(this.layoutInfo.childNodeId) {
        _schema.body.splice(_schema.body.findIndex((_comp: any) => _comp.id === childNodePath.at(-1)) + 1, 0, _component);
      } else {
        _schema.body.push(_component);
      }
    },
  }));

  return (
    <StoreContext.Provider value={context}>
      {props.children}
    </StoreContext.Provider>
  );
}

export default observer(Store);
