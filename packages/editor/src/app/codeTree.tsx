import { createContext } from 'react';
import { v1 as uuid } from 'uuid';
import { traverse, traverseUp } from '../utils';
import { useLocalObservable } from 'mobx-react-lite';
import { isParentNode } from '@/utils/schema';
import { toJS } from 'mobx';

export interface FieldNode {
  type: any;
  h?: number;
  displayName?: string;
  module?: string;
  props: Record<string, any>;
}

export interface FieldNodeSchema extends FieldNode {
  id: string;
  props: Record<string, any>;
  children: FieldNodeSchema[];
}

export interface State extends FieldNodeSchema {
  focusId?: string;
}

const initialState: State = {
  props: {},
  id: 'root',
  type: 'div',
  children: [],
};

export const CodeTreeContext = createContext(null) as any;

const codeTreeObj = {
  state: initialState,
  append: function (action) {
    const focusId = uuid();
    this.state.focusId = focusId;
    this.state.children.push({
      ...action,
      id: focusId,
    });
  },
  appendCom: function (action) {
    const { data, item, hoverParentId, hoverIndex, positionDown } =
      action;

    const focusId = uuid();

    traverse(this.state, (sub) => {
      //非嵌套标签往父层插入
      if (!isParentNode(data.type) && sub.id === hoverParentId) {
        if (positionDown) {
          sub.children.splice(hoverIndex + 1, 0, { ...item, id: focusId });
        } else {
          sub.children.splice(hoverIndex, 0, { ...item, id: focusId });
        }
        return false;
      }
      if (isParentNode(data.type) && sub.id === data.id) {
        if (sub.children && sub.children.length > 0) {
          sub.children.push({
            ...item,
            id: focusId,
          });
        } else {
          sub.children = [{ ...item, id: focusId }];
        }

        return false;
      }
      return true;
    });
    this.state.focusId = focusId;
  },
  moveCom: function (action) {
    const {
      data: hoverData,
      item: dragData,
      hoverParentId: hId,
      hoverIndex: hIndex,
      dragParentId,
      dragIndex,
      positionDown,
    } = action;

    if (hoverData.id === dragData.id) return this.state;
    //在子节点中不拖拽
    let hoverInDragData = false;

    traverse(dragData, (sub) => {
      if (sub.id === hoverData.id) {
        hoverInDragData = true;
        return false;
      }
      return true;
    });

    if (hoverInDragData) return this.state;

    const focusId = uuid();

    traverse(this.state, (sub) => {
      if (sub.id === dragParentId) {
        sub.children.splice(dragIndex, 1);
        return false;
      }
      return true;
    });

    traverse(this.state, (sub) => {
      if (!isParentNode(hoverData.type) && sub.id === hId) {
        if (positionDown) {
          sub.children.splice(hIndex + 1, 0, { ...dragData, id: focusId });
        } else {
          sub.children.splice(hIndex, 0, { ...dragData, id: focusId });
        }
        return false;
      }
      //非嵌套标签往父层插入
      if (isParentNode(hoverData.type) && sub.id === hoverData.id) {
        if (sub.children) {
          sub.children.unshift({
            ...dragData,
            id: focusId,
          });
        } else {
          sub.children = [{ ...dragData, id: focusId }];
        }
        return false;
      }
      return true;
    });

    this.state.focusId = focusId;
  },
  setFocus: function (action) {
    const { focusId } = action;
    this.state.focusId = focusId;
  },
  removeCom: function (action) {
    const { id, parentId } = action;
    traverse(this.state, (sub) => {
      if (sub.id === parentId) {
        sub.children = sub.children.filter((child) => child.id !== id);
        console.log(toJS(sub.children))
        return false;
      }
      return true;
    });
  },
  updateTree: function (action) {
    const { focusId } = this.state;
    const { key, value } = action;
    traverse(this.state, (sub) => {
      if (sub.id === focusId) {
        sub.props[key] = value;
        return false;
      }
      return true;
    });
  },
};

export function CodeTree(props: { children: any }) {
  const codeTreeStore = useLocalObservable(() => codeTreeObj);
  return (
    <CodeTreeContext.Provider value={codeTreeStore}>
      {props.children}
    </CodeTreeContext.Provider>
  );
}
