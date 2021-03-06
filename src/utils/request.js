import axios from "axios";
import { Message } from "element-ui";
import * as auth from "@u/auth";

const service = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 15000,
});

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    config.headers["Tokey"] = auth.getToKen();
    config.headers["UserName"] = auth.getUserName();
    // if (auth.getToKen()) {
    //   config.headers["X-Authorization"] = "Bearer " + auth.getToKen(); // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    let data = response.data;
    // 业务需求
    if (data.resCode !== 0) {
      Message.error(data.message);
      return Promise.reject(data);
    } else {
      return response;
    }
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default service;
