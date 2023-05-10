import { IRouteComponentProps } from 'umi';
import { useEffect } from 'react';
import { Breadcrumb, Layout as AntdLayout, Menu } from 'antd';
import PageHeader from '../components/Header';

const { Header, Content } = AntdLayout;

export default function Layout({ children }: IRouteComponentProps) {
  return (
    <>
      <PageHeader />
      <Content>{children}</Content>
    </>
  );
}
