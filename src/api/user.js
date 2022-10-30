import { requestService } from '@/utils/request'

const api = {
  login: '/user/student_login',
  regiser: '/user/student_register',
  captcha: '/user/captcha'
}

export function login (data) {
  return requestService({
    url: api.login,
    method: 'post',
    data: data
  })
}

export function regiser (data) {
  return requestService({
    url: api.regiser,
    method: 'post',
    data: data
  })
}

export function captcha (data) {
  return requestService({
    url: api.captcha,
    method: 'post',
    data: data
  })
}