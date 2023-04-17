import React, { useContext, useEffect, useRef, useState } from 'react';
import { CRAD } from '../../../../ItemTypes';
import { useDrop } from 'react-dnd';
import styles from './index.less';
import { observer } from 'mobx-react-lite';
import Mask from './Mask';
import { StoreContext } from '../../store';

// TODO：对position：absolute 布局 特殊处理拖拽，使用react-grid-layout 进行grid布局拖拽 ?
// TODO: 在画布上 有一个iframe和iframe遮罩画布，拖拽开始渲染器传回每个组件位置信息（可放入组件信息）用
// 于给遮罩层渲染，渲染器实时显示 当前放入容器border提示 以及 是否插入在同级组件中间的提示线 是否可以放入目前鼠标hover的组件

interface DragItem {}
interface ILayoutInfo {
  parentNodeId: string;
  childNodeId: string;
  parentNodeRect: DOMRect;
  childNodeRect: DOMRect;
  axis: IAxis;
}

export type IAxis = 'x' | 'y';

const Canvas = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const { eventBus, schema, addSchema, layoutInfo, setLayoutInfo } = useContext(
    StoreContext,
  ) as any;

  const [isHover, setIsHover] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('message', (e: any) => {
      if (e.data.type === 'paint') {
        setLayoutInfo(e.data.data);
      }
    });

    eventBus.on('drag-start', ([]) => {
      (iframeRef.current as HTMLIFrameElement).contentWindow?.postMessage(
        { type: 'drag-start' },
        '*',
      );
    });

    eventBus.on('hover', ([mouseInfo]) => {
      (iframeRef.current as HTMLIFrameElement).contentWindow?.postMessage(
        { type: 'hover', data: mouseInfo },
        '*',
      );
    });

    eventBus.on('schema', ([schema]) => {
      (iframeRef.current as HTMLIFrameElement).contentWindow?.postMessage(
        { type: 'schema', data: schema },
        '*',
      );
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      eventBus.emit('schema', [JSON.stringify(schema)]);
    }, 1000)
  }, [schema]);

  const [{ canDrop, isOver }, drop] = useDrop<
    DragItem,
    {},
    { canDrop: boolean; isOver: boolean }
  >(() => ({
    accept: CRAD,
    // 在这里 发送当前鼠标位置 发送给iframe
    // iframe计算后返回 容器id、子级id、容器rect、子级rect
    hover: (item, monitor) => {
      setIsHover((isHover) => {
        if (!isHover) {
          eventBus?.emit('drag-start', []);
          return true;
        }
        eventBus?.emit('hover', [
          {
            x:
              (monitor.getClientOffset()?.x || 0) -
              45 +
              document.documentElement.scrollLeft,
            y:
              (monitor.getClientOffset()?.y || 0) +
              document.documentElement.scrollTop,
          },
        ]);
        return true;
      });
    },

    // 根据容器和子级 操作schema
    // 将操作完成的schema 发送给iframe
    drop: (item, monitor) => {
      const didDrop = monitor.didDrop(); // returns false for direct drop target
      if (didDrop) {
        return;
      }
      setIsHover(false);

      addSchema(item?.data);

      eventBus.emit('schema', [JSON.stringify(schema)]);

      return { name: 'Dustbin' };
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({
        shallow: true,
      }),
      canDrop: monitor.canDrop(),
    }),
  }));
  return (
    <div ref={drop} className={styles.Canvas}>
      <Mask info={layoutInfo as ILayoutInfo} hover={isHover} />
      <iframe
        ref={iframeRef}
        className={styles.Iframe}
        src="http://localhost:8001"
      />
    </div>
  );
};

export default observer(Canvas);
