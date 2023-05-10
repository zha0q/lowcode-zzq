import useAuth from '@/hooks/useAuth';
import { redirectUrl } from '@/utils/config';
import { Redirect } from 'umi';

export default ({ children }: any) => {
  const { isLogin } = useAuth();
  if (isLogin) {
    return <div>{children}</div>;
  } else {
    window.location.assign(redirectUrl);
  }
};
