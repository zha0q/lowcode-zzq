import React from 'react';
import styles from './index.less';
import { Layout } from 'antd';
import MaterialsEditor from './components/MaterialsEditor';
import Container from './Container';
import FormEditor from './components/FormEditor';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { CodeTree } from '@/app/codeTree';
import Canvas from './components/Canvas';

function Editor() {
  const { Header, Content, Footer, Sider } = Layout;
  const contentRef = React.createRef();

  const onDragEnd = (result: any) => {
    console.log('dragend', result);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Layout hasSider>
        <CodeTree>
          <div className={styles.Layout}>
            <MaterialsEditor Sider={Sider} />
            {/* <Container Content={Content} /> */}
            <Canvas mobile={false} />
          </div>
        </CodeTree>
      </Layout>
    </DndProvider>
  );
}

Editor.wrappers = ['@/wrappers/auth'];

export default Editor;
