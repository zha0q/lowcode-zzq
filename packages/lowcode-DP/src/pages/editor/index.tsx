import React from 'react';
import styles from './index.less';
import { Layout } from 'antd';
import MaterialsEditor from "./components/MaterialsEditor";
import Container from './Container';
import FormEditor from './components/FormEditor';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


function Editor() {
  const { Header, Content, Footer, Sider } = Layout;
  const contentRef = React.createRef()

  const onDragEnd = (result: any) => {
    console.log('dragend', result)
  }

  return <Layout hasSider>
    <DragDropContext onDragEnd={onDragEnd}>

      <MaterialsEditor Sider={Sider} />
      <Container Content={Content} />

    </DragDropContext>

  </Layout>
}

Editor.wrappers = ['@/wrappers/auth'];


export default Editor;
