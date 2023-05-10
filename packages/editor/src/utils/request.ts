import { axiosInstance } from './config';
import { AxiosResponse } from 'axios';

export interface IUserInfo {
  id: string;
  _id: string;
  name: string;
  email: string;
  avatarUrl: string;
  avatarThumb: string;
  avatarBig: string;
  avatarMiddle: string;
  mobile: string;
  enName: string;
  feishuUnionId: string;
  updateTime: string;
}

export const getAuthRequest = (code: string) => {
  return axiosInstance.get(`/auth/feishu/auth2?code=${code}`);
};

export const getUserRequest = () => {
  return axiosInstance.get(`/auth/token/info`);
};

export const getUserInfoRequest = (
  unionId: string,
): Promise<AxiosResponse<IUserInfo>> => {
  return axiosInstance.post(`/user/getUserInfo`, {
    feishuUnionId: unionId,
  });
};
