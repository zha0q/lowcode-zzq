import React, { useState } from 'react';
import styles from './index.less';
import { Drawer, Layout } from 'antd';
import MaterialsEditor from './components/MaterialsEditor';
import Container from './Container';
import FormEditor from './components/FormEditor';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Canvas from './components/Canvas';
import Store from './store';

function Editor() {
  const { Header, Content, Footer, Sider } = Layout;
  const contentRef = React.createRef();

  const [open, setOpen] = useState(true);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onDragEnd = (result: any) => {
    console.log('dragend', result);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Store>
        <Layout hasSider>
          <div className={styles.Layout}>
            <MaterialsEditor Sider={Sider} />
            {/* <Container Content={Content} /> */}
            <Canvas />
            <Drawer
              title="编辑器"
              placement="right"
              onClose={onClose}
              open={open}
            >
              <FormEditor />
            </Drawer>
          </div>
        </Layout>
      </Store>
    </DndProvider>
  );
}

Editor.wrappers = ['@/wrappers/auth'];

export default Editor;
