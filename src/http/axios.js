import axios from 'axios';
import {message} from 'ant-design-vue';

/**
 * 请求拦截
 */
axios.interceptors.request.use(
    (config) => {
    // 请求前最后的配置
      config.headers.terminal = 1;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
);

/**
 * 响应拦截
 */
axios.interceptors.response.use(
    (response) => {
    /**
     * 请求成功后执行的代码
     * 自定义全局的拦截处理
     */
      if (response.data.error !== null) {
        message.error(response.data.error.message);
      }
      return response.data;
    },
    (error) => {
    // 请求失败
      if (error && error.response) {
        switch (error.response.status) {
          case 400:
            message.error('错误请求！');
            break;
          case 403:
            message.error('拒绝访问！');
            break;
          case 404:
            message.error('请求错误,未找到该资源！');
            break;
          case 500:
            message.error('服务器端出错！');
            break;
          case 502:
            message.error('网络错误！');
            break;
          case 503:
            message.error('服务不可用！');
            break;
          case 504:
            message.error('网络超时！');
            break;
          default:
            return message.error(error);
        }
      } else {
        message.error('连接到服务器失败！');
      }
    },
);
