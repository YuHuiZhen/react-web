import axios from 'axios';
// 统一处理
const instance = axios.create({
  baseURL: 'http://localhost:3000/', // 设置后端服务的接口地址
  timeout: 5000, // 设置请求超时时间
  headers: {
    'Content-Type': 'application/json' // 设置请求头
  },
   // 请求携带cookie
   withCredentials: true,
});

// 请求拦截器
instance.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use(response => {
  // 对响应数据做些什么
  // 接口返回数据格式层级不统一 需要注意
  if (response.data.code === 200 || response.code === 200) {
    return Promise.resolve(response.data);
  } else {
    return Promise.reject(response.data);
  }
}, error => {
  // 对响应错误做些什么
  return Promise.reject(error);
});

export default instance;