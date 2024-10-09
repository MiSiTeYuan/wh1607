import router from '../router'
import axios from 'axios'

let LoadingInstance = null;
// create an axios instance
const service = axios.create({

  baseURL:  '', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  headers: {
    'Content-Type': 'application/json',
    // 'Content-Type': 'application/x-www-form-urlencoded'
  },
  timeout: 50000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {

    // config.transformRequest = [function (data) {
    //   // Do whatever you want to transform the data
    //   console.log('request', data)
    //   return data;
    // }];

    // do something before request is sent
    if (config.loading && !(LoadingInstance && LoadingInstance.visible)) {
      // LoadingInstance = Loading.service({
      //   lock: true,
      //   text: '正在提交，请稍后...',
      //   spinner: 'el-icon-loading',
      //   fullscreen: false,
      //   background: 'rgba(255, 255, 255, 0.1)'
      // });
    }
    config.url = config.url.trim();
    return config;
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {

    const config = response.config;

    setTimeout(() => {
      config.loading && LoadingInstance && LoadingInstance.close();
    }, 400);



    if (response.status == 200) {
      return response.data;
    } else {
      //				Message.error(response.data.message || 'Has Error')
      return Promise.reject(new Error(response.data.message || 'Error'))
    }
  },
  error => {
    error.config && error.config.loading && LoadingInstance && LoadingInstance.close();

    let response = error.response;

    // locaLLogin
    if (response && response.status == 401) {
      // removeToken();
      router.push('/login');
      return false;
    } 

    // 失效
    // if (response && response.status == 401) {
    //   MessageBox.confirm('当前会话已过期，请重新登录！', {
    //     confirmButtonText: '重新登录',
    //     cancelButtonText: '取消',
    //     type: 'warning'
    //   }).then(() => {
    //     store.dispatch('user/resetToken').then(() => {
    //       location.reload()
    //     })
    //   })
    // }

    return Promise.reject(response && response.data)
  }
)

export default service
