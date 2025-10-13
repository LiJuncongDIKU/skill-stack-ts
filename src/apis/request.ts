import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';
import { ElMessageBox } from 'element-plus';
import { localMock } from './localMock'; // 兼容静态网页

declare module 'axios' {
  interface AxiosInstance {
    defineApi: (uri: string, options?: AxiosRequestConfig) => ((data: any, config?: AxiosRequestConfig) => Promise<any>);
  }
}
const isStaticIo = import.meta.env.MODE !== 'development'; // 如果是部署后的静态网站的话没有mock服务时
function defineApi(this: AxiosInstance, uri: string, options: AxiosRequestConfig = {}) {
  const localHandler = localMock[uri]?.handler;
  if (isStaticIo && !!localHandler) {
    return (data: any, config: AxiosRequestConfig = {}) => {
      return new Promise((resolve) => {
        console.log('config', config)
        setTimeout(() => {
          console.log('localMock[uri].handler(data)', (data))
          resolve({ data: localMock[uri].handler(data) });
        }, 1000);
      })
    }
  }
  return (data: any, config: AxiosRequestConfig = {}) => {
    const exOption = {
      method: 'POST', // 默认post
      ...options, // 定义api时候的配置
      ...config, // 调用时候的配置, 优先级最高
    };
    if (exOption.method.toLocaleLowerCase() === 'post') {
      exOption.data = data;
    } else {
      exOption.params = data;
    }
    console.log('exOption', exOption)
    return this.request({ // 定义实例时已带有默认配置
      url: uri,
      ...exOption,
    }).catch((e) => {
      ElMessageBox({
        title: e.code || '提示',
        message: '展示一下统一异常处理的弹窗:' + e.message
      })
      throw '禁止后续的then执行'
    })
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
export const baseHost = import.meta.env.MODE === "development" ? 'http://localhost:5173' : 'http://www.xxx.com';
export const adHost = import.meta.env.MODE === "development" ? 'http://localhost:5173' : 'http://ad.xxx.com';
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