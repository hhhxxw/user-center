// 引入axios请求库
import axios from "axios";
// alert(process.env.NODE_ENV);
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.config.url.includes("/api/user/current")) {
      return { data: { id: 1, name: "Mock User" } }; // 返回模拟数据
    }
    return Promise.reject(error);
  }
);
const myAxios = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080"
      : "https://codefather.cn",
  timeout: 10000,
  withCredentials: true,
});

// Add a request interceptor
myAxios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
myAxios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data 将响应答应出来
    console.log(response);

    const { data } = response;
    console.log(data);
    // 未登录
    if (data.code === 40100) {
      // 不是获取用户信息接口，或者不是登录页面，则跳转到登录页面
      if (
        !response.request.responseURL.includes("user/current") &&
        !window.location.pathname.includes("/user/login")
      ) {
        window.location.href = `/user/login?redirect=${window.location.href}`;
      }
    }
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

// 将实例导出
export default myAxios;
