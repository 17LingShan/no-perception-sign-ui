import { requestService } from '@/utils/request'

const api = {
  login: '/user/student_login'
}

export function login (Data) {
  return requestService({
    url: api.login,
    method: 'post',
    data: Data
  })
}