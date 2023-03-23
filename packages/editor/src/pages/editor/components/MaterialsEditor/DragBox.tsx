import React from 'react';
import cl from 'classnames';
import { CRAD } from '../../../../ItemTypes';
import { useDrag } from 'react-dnd';
import { v1 as uuid } from 'uuid';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { FieldNode, FieldNodeSchema } from '../../../../app/codeTree';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './DragBox.less';

const DragBox = ({
  data,
  setCollapsed,
}: {
  data: FieldNodeSchema | FieldNode;
  setCollapsed: any;
}) => {
  const [{ isDragging }, dragRef, connectDragPreview] = useDrag(() => {
    const { type } = data;
    let children: any[] = [];
    if (type === 'Grid') {
      children = new Array(4).fill('1').map(() => ({
        id: uuid(),
        type: 'div',
        props: {
          className: '',
        },
      }));
    }
    if (type === 'Form') {
      children = new Array(3).fill('1').map((it, i) => ({
        id: uuid(),
        type: 'Form.Item',
        props: {
          name: 'field' + i,
          label: 'field' + i,
        },
        children: [
          {
            type: 'Input',
            id: uuid(),
            module: 'antd',
            props: {},
          },
        ],
      }));
    }
    return {
      type: CRAD,
      item: { data: { ...data, children } },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    };
  }, []);
  connectDragPreview(getEmptyImage());

  useEffect(() => {
    setCollapsed(isDragging);
  }, [isDragging]);

  return (
    <div
      ref={dragRef}
      className={styles.DragBox}
    >
      {data.type}
    </div>
  );
};

export default observer(DragBox);
