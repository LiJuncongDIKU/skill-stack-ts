import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

declare module 'axios' {
  interface AxiosInstance {
    defineApi: (uri: string, options?: AxiosRequestConfig) => Function;
  }
}
function defineApi(this: AxiosInstance, uri: string, options: AxiosRequestConfig = {}) {
  return (data: any, config: AxiosRequestConfig = {}) => {
    this.request({ // 定义实例时已带有默认配置
      url: uri,
      ...options, // 定义api时候的配置
      ...config, // 调用时候的配置, 优先级最高
      data
    });
  }
}


function createAxios(uri: string, options: AxiosRequestConfig = {}): AxiosInstance {
  const instance: AxiosInstance = axios.create({
    baseURL: uri,
    ...options
  });
  // 配合声明使用，创建实例时候，就必须插入defineApi方法
  instance.defineApi = defineApi;
  return instance;
}
export const baseHost = import.meta.env.MODE === 'dev' ? 'http://localhost:5173' : 'http://www.xxx.com';
export const adHost = import.meta.env.MODE === 'dev' ? 'http://localhost:5173' : 'http://ad.xxx.com';
// 比如说，我们后端对于用户服务、广告服务等是分开管理的，甚至需要不同的过滤器、甚至域名、开发时代理
export const adAxios = createAxios(`${adHost}/api/ad`);
export const authAxios = createAxios(`${baseHost}/api/auth`);
export const publicAxios = createAxios(`${baseHost}/api/`); // 不需要登录的接口

function useAuthInterceptor(axiosInstance: AxiosInstance) {
  axiosInstance.interceptors.request.use((config) => {
    // 可以在这里添加一些公共的请求头
    config.headers['AccessToken'] = 'xxxToken';
    config.headers['X-Custom-Header'] = 'SomeValue';
    return config;
  });
}

useAuthInterceptor(authAxios);
useAuthInterceptor(adAxios);
// useAuthInterceptor(publicAxios); 这些接口不需要登录许可

function useErrorInterceptor(axiosInstance: AxiosInstance) {
  // 统一处理异常返回
  axiosInstance.interceptors.response.use((res) => {
    return res;
  }, (err) => {
    // 统一处理异常返回
    console.error(err);
    return Promise.reject(err);
  });
}

useErrorInterceptor(authAxios);
useErrorInterceptor(adAxios);
useErrorInterceptor(publicAxios);