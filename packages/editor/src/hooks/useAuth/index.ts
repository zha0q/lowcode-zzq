import { redirectUrl } from '@/utils/config';
import { IUserInfo } from '@/utils/request';
import { useMemo } from 'react';
import { useHistory } from 'umi';

const useAuth = () => {
  const jwt = localStorage.getItem('jwt');
  const userInfo = localStorage.getItem('userInfo')
    ? (JSON.parse(localStorage.getItem('userInfo') || '') as IUserInfo)
    : null;

//   if (!jwt || !userInfo) {
//     window.location.assign(redirectUrl);
//   }

  const isLogin = useMemo(() => {
    return !!jwt;
  }, [jwt]);

  return {
    jwt,
    userInfo,
    isLogin,
  };
};

export default useAuth;
