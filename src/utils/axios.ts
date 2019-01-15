import axios from "axios";
import { beaseURL } from "../config/config";

axios.defaults.baseURL = beaseURL;
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.headers["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

//请求前
axios.interceptors.request.use(
  config => {
    console.log("请求前");
    return config;
  },
  error => {
    console.log("加载超时");
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    const res = response.data;

    return response;
  },
  error => {
    console.log("数据加载超时，请检查网络或服务器访问问题或稍后再试！");
    return Promise.reject(error);
  }
);

export default axios;
