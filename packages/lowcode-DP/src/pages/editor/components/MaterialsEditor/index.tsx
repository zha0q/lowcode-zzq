import { Drawer, SiderProps, Tooltip } from "antd";
import { useState } from "react";
import styles from './index.less';
import { ParagraphOutlined, ZujianOutlined, JsOutlined, OdbcOutlined } from '@icons';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

type Category = 'outline' | 'component' | 'database' | 'code';

const Category2Title = {
  outline: '大纲',
  component: '组件',
  database: '数据',
  code: '源码'
}

const Col = (props: any) => {
  const { Logo, active, title, handleClick } = props;
  return <Tooltip placement="rightBottom" title={title} overlayInnerStyle={{ fontSize: "12px" }}>
    <div style={active ? { color: '#3897f5' } : {}} className={styles.Col} onClick={handleClick}>
      <Logo width={50} height={50} />
    </div>
  </Tooltip>

}

export default function (props: { Sider: React.ForwardRefExoticComponent<SiderProps & React.RefAttributes<HTMLDivElement>>, contentRef: React.RefObject<any>}) {
  const { Sider, contentRef } = props;

  const [collapsed, setCollapsed] = useState(false);
  const [category, setCategory] = useState<Category>('outline');

  const onClick = (e: MouseEvent, cate: Category) => {
    if (collapsed || category === cate) {
      setCollapsed(!collapsed)
    }
    setCategory(cate);
  }

  const onDrawerClose = (e: any) => {
    onClick(e, category);
  }

  const renderContent = () => {
    switch (category) {
      case "component":
        return <div className={styles.Content}>
            <Droppable droppableId="droppable2">
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  // style={getListStyle(snapshot.isDraggingOver)}
                >
                  {[{content: '123', id: '2'}].map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          // style={getItemStyle(
                          //   snapshot.isDragging,
                          //   provided.draggableProps.style
                          // )}
                        >
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
        </div>
    }
  }

  return <Sider
    collapsed
    collapsedWidth={45}
    className={styles.Sider}
    trigger={null}
  >
    <div className={styles.Tool}>
      <Col active={!collapsed && category === 'outline'} Logo={ParagraphOutlined} handleClick={(e: MouseEvent) => onClick(e, 'outline')} title="大纲" />
      <Col active={!collapsed && category === 'component'} Logo={ZujianOutlined} handleClick={(e: MouseEvent) => onClick(e, 'component')} title="组件" />
      <Col active={!collapsed && category === 'database'} Logo={OdbcOutlined} handleClick={(e: MouseEvent) => onClick(e, 'database')} title="数据" />
      <Col active={!collapsed && category === 'code'} Logo={JsOutlined} handleClick={(e: MouseEvent) => onClick(e, 'code')} title="源码" />
    </div>
    <Drawer
      width={250}
      mask={false}
      title={Category2Title[category]}
      placement="left"
      closable
      onClose={onDrawerClose}
      open={!collapsed}
      getContainer={contentRef.current}
      rootStyle={{ marginLeft: '45px', zIndex: 1 }}
    >
      {renderContent()}
    </Drawer>
  </Sider>
}
