import axios from 'axios'


var instance = axios.create({});

instance.defaults.baseURL = "http://127.0.0.1:5000/"

//随便抄的等以后再适配
instance.interceptors.response.use(
    response => {
      // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
      // 否则的话抛出错误
      if (response.status === 200) {
        if(typeof response.data != 'undefined'){
          return Promise.resolve(response);
        }else{
          return Promise.reject(response);
        }
      } else {
        return Promise.reject(response);
      }
    },
    // 服务器状态码不是2开头的的情况
    // 这里可以跟你们的后台开发人员协商好统一的错误状态码
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
    // 下面列举几个常见的操作，其他需求可自行扩展
    error => {
  
      const { response } = error;
      if (response) {
        // 请求已发出，但是不在2xx的范围
        // errorHandle(response.status, response.data.message);
        return Promise.reject(response);
  
      } else {
        // 处理断网的情况
        // eg:请求超时或断网时，更新state的network状态
        // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
        // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
        //store.commit('changeNetwork', false);
        //toSignin();
        //vueobj.$message.error({showClose: true, message: "与服务器连接失败！", duration: 3000});
  
        var originalRequest = error.config;
        if(error.code == 'ECONNABORTED' && error.message.indexOf('timeout')!=-1 && !originalRequest._retry){
          // originalRequest._retry = true
          // return axios.request(originalRequest);
        //   vueobj.$message.error({showClose: true, message: "请求超时，请稍后重试！", duration: 3000});
          return Promise.reject(response);
        }else{
            return Promise.resolve(response);
        }
      }
    }
);

export default instance;

