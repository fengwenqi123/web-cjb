/* eslint-disable object-curly-spacing */
import axios from 'axios'
import {Message} from 'element-ui'
import store from '../store'
import {TokenKey} from '@/utils/auth'
import {showFullScreenLoading, tryHideFullScreenLoading} from './load.js'
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 20000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['accessToken'] = new TokenKey().getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  showFullScreenLoading()
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    tryHideFullScreenLoading()
    const res = response.data
    if (res.code !== 200) {
      if (res.msg) {
        Message({
          message: res.msg,
          type: 'error',
          duration: 5 * 1000
        })
      }
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    tryHideFullScreenLoading()
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
