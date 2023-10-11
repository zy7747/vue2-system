import axios from "axios";
const baseUrl = import.meta.env.VITE_APP_BASE_API;
// 创建实例
const service = axios.create({
  baseURL: baseUrl,
  // 超时时间
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use((config) => {
  return config;
});

// 响应拦截器
service.interceptors.response.use(
  (res: any) => {
    // 哪怕网络请求成功, 也有两种可能
    if (res) {
      // 成功
      return res.data;
    } else {
      // 失败
      return Promise.reject(new Error("Error"));
    }
  },
  (err) => {
    console.dir(err);
    // 第二个是失败回调函数(网络层面)
    return Promise.reject(err);
  }
);

export default service;
