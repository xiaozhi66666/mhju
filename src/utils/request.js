import axios from "axios";
import storage from "./storage";
import { Message } from "element-ui";
const baseURL = 'https://www.fastmock.site/mock/052388bff43d641e9daa8648836c6e4a/mhjy'
const request = axios.create({
    baseURL,
    timeout: 3000,
    headers: { 'X-Custom-Header': 'foobar' }
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // config.headers['token'] = storage.get('userInfo')['token'] || ''
    // console.log(storage.get('userInfo')['token']);
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response, reject) {
    // 2xx 范围内的状态码都会触发该函数。
    let { status, message } = response.data['data']
    // console.log(message, status);
    if (status !== 200) {
        Message({ message, type: "error" })
    }
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    if (error.message.includes('timeout')) {
        Message({ message: '网络请求超时，请重试！', type: 'warning', duration: 3 * 1000 })
    }
    return Promise.reject(error);
});

export default request