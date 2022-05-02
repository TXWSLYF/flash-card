import axiosInstance from ".";

interface loginBody {
  username: string,
  password: string
}
/**
 * @description 登录 
 */
export const login = (body: loginBody) => axiosInstance.post('/login', body)