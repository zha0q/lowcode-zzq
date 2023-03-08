import { Redirect } from 'umi'

export default ({children}: any) => {
  // const { isLogin } = useAuth();
  const { isLogin } = { isLogin: true };
  if (isLogin) {
    return <div>{children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
}
