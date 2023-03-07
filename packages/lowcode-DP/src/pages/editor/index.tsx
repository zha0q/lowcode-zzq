import React from "react";
import { Layout } from 'antd';

function Editor() {
  const { Header, Content, Footer, Sider } = Layout;

  return <Layout hasSider>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
    </Sider>
  </Layout>
}

Editor.wrappers = ['@/wrappers/auth'];


export default Editor;
