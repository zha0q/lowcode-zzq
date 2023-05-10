import { Avatar, Button, PageHeader } from 'antd';
import React, { useMemo } from 'react';
import { useHistory, useLocation } from 'umi';
import styles from './index.less';
import { redirectUrl } from '@/utils/config';
import useAuth from '@/hooks/useAuth';

const Header: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const { isLogin, userInfo } = useAuth();

  const extraData = useMemo(() => {
    if (isLogin && userInfo) {
        return [
            <Avatar src={userInfo?.avatarUrl} />
        ]
    } else {
      return [
        <Button
          key="1"
          type="primary"
          onClick={() => {
            window.location.assign(redirectUrl);
          }}
        >
          登录
        </Button>,
      ];
    }
  }, [isLogin, userInfo]);

  return (
    <PageHeader
      className={styles.PageHeader}
      style={{ display: location.pathname === '/editor' ? 'none' : 'block' }}
      ghost={false}
      title="低代码开发平台"
      subTitle={
        <div className={styles.SubTitle}>
          <img
            height="15"
            width="15"
            src="https://img.alicdn.com/imgextra/i4/O1CN013upU1R1yl5wVezP8k_!!6000000006618-2-tps-512-512.png"
            onClick={() =>
              window.open('https://github.com/zha0q/lowcode-zzq', 'auth')
            }
          ></img>
        </div>
      }
      extra={extraData}
    ></PageHeader>
  );
};

export default Header;
