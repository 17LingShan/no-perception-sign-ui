import { requestService } from '@/utils/request'

const api = {
  login: '/user/student_login'
}

const Data = new FormData()
Data.append('email', '1282075034@qq.com')
Data.append('password', '123456')

export function login(parm) {
  return requestService({
    url: api.login,
    method: 'post',
    data: Data
  })
}