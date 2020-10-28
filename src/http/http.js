import axios from 'axios';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = '/';
const requestMethod = new Map();
requestMethod.set(1, 'application/json; charset=utf-8');
requestMethod.set(2, 'application/x-www-form-urlencoded; charset=utf-8');

export default {
  get(url, params) {
    const options = {};
    if (params) {
      options.params = params;
    }
    return axios.get(url, options);
  },

  post(url, data, method = 1) {
    const options = {};
    options.headers = {
      headers: {
        'Content-Type': requestMethod.get(method),
      },
    };
    return axios.post(url, data, options);
  },
};
