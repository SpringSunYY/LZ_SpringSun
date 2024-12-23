import axios from 'axios'

// 创建 axios 实例
const http = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: import.meta.env.VITE_APP_BASE_API,
    // 超时
    timeout: 10000
})

// request拦截器
http.interceptors.request.use(config => {
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false
    if ( !isToken) {
        config.headers['Authorization'] = 'Bearer '  // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    console.log(isToken);
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

http.interceptors.response.use(
    (response) => {
        // 响应成功处理
        return response
    },
    (error) => {
        // 响应错误处理
        return Promise.reject(error)
    }
)

// 导出 axios 实例
export default http
