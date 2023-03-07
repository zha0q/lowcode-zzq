import { message } from 'antd';
import { IRouteComponentProps } from 'umi'
import { useEffect } from 'react';

export default function Layout({ children }: IRouteComponentProps) {
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    messageApi.info('hahahah')
  }, []);
  return <>
    {contextHolder}
    {children}
  </>;
}
