import axios from 'axios'
import storage from 'store'
import { networkConfig } from '@/config/network.config'
import { useRouter } from 'vue-router'
import { userStore } from '@/store/user'
import { TOKEN, AUTHORIZATION } from '@/store/types'

// 创建axios实例
export function requestService (config) {
  const service = axios.create({
    baseURL: networkConfig.serverUrl,
    timeout: networkConfig.requestTimeout //超时
  })

  // request 拦截器
  service.interceptors.request.use(config => {
    const token = storage.get(TOKEN)
    if (token) {
      config.headers[AUTHORIZATION] = 'Bearer ' + token
    }
    return config
  }, (err) => {
    console.log(err)
    Promise.reject(err)
  })

  // 响应拦截器
  service.interceptors.response.use(res => {
    return res
  }, (err) => {
    const piniaUser = userStore()
    const router = useRouter()
    piniaUser.Logout().then(() => {
      router.push({ path: '/user/login' })
    })
    return Promise.reject(err)
  })
  return service(config)
}