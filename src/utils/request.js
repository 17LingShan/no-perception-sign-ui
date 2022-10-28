import axios from 'axios'
import { networkConfig } from '../config/network.config'

// 创建axios实例
export function requestService(config) {
  const service = axios.create({
    baseURL: networkConfig.serverUrl,
    timeout: networkConfig.requestTimeout //超时
  })

  // request 拦截器
  service.interceptors.request.use((config) => {
    return config
  }, (err) => {
    console.log(err)
    Promise.reject(err)
  })

  // 响应拦截器
  service.interceptors.response.use((res) => {
    console.log(res)
  }, (err) => {
    return Promise.reject(err)
  })

  return service(config)
}