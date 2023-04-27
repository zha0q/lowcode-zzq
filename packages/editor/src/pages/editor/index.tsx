import React, { useState } from 'react';
import styles from './index.less';
import { Layout } from 'antd';
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

  return (
    <DndProvider backend={HTML5Backend}>
      <Store>
        <Layout hasSider>
          <div className={styles.Layout}>
            <MaterialsEditor Sider={Sider} />
            {/* <Container Content={Content} /> */}
            <Canvas />
            <FormEditor />
          </div>
        </Layout>
      </Store>
    </DndProvider>
  );
}

Editor.wrappers = ['@/wrappers/auth'];

export default Editor;
