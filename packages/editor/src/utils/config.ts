import axios from 'axios';

export const baseUrl = 'http://127.0.0.1:8000/api';

export const redirectUrl =
  'https://open.feishu.cn/open-apis/authen/v1/user_auth_page_beta?app_id=cli_a387cdfd13b8900e&redirect_uri=http%3A%2F%2F127.0.0.1%3A8000%2Fauth&state=';

//axios 的实例及拦截器配置
const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.log(err, '网络错误');
  },
);

export { axiosInstance };
