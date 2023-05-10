import {
  getAuthRequest,
  getUserInfoRequest,
  getUserRequest,
} from '@/utils/request';
import { Spin, message } from 'antd';
import { useEffect } from 'react';
import { useHistory, useLocation } from 'umi';
import styles from './index.less';
import { redirectUrl } from '@/utils/config';

export default function () {
  const location: any = useLocation();
  const history = useHistory();
  const code = location?.query?.code;

  useEffect(() => {
    const fetchData = async () => {
      const jwt = (await getAuthRequest(code))?.data;
      if (jwt) {
        localStorage.setItem('jwt', jwt);
        const user = (await getUserRequest())?.data;
        const userInfo = (await getUserInfoRequest(user?.feishuUnionId))?.data;
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        message.success(`你好👋！${user.name}`);
        history.push('/');
      } else {
        message.error('登录失败');
        window.location.assign(redirectUrl);
      }
    };
    fetchData().catch((e) => {
      message.error(e);
    });
  }, []);

  return (
    <div className={styles.Auth}>
      <Spin size="large" />;
    </div>
  );
}
