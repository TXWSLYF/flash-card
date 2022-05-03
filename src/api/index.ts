import axios from "axios";
import { ElMessage } from "element-plus";

enum ERROR_CODES {
  "USER_NOT_LOGGED_IN" = 3,
}

const axiosInstance = axios.create({
  baseURL: "/api",
});

axiosInstance.interceptors.response.use(
  (response) => {
    const { code, message } = response.data;

    if (code !== 0) {
      ElMessage.error(message);

      // 未登录，跳转到登录页面
      if (code === ERROR_CODES.USER_NOT_LOGGED_IN) {
        setTimeout(() => {
          window.location = "/login" as any;
        }, 0);

        return;
      }

      return Promise.reject(new Error(message));
    }

    return response.data;
  },
  (error) => {
    Promise.reject(error);
    ElMessage.error(error.message);
  }
);

export default axiosInstance;
