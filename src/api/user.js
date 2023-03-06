import { requestService } from '@/utils/request'

const regMap = {
  student: '/user/student_register',
  teacher: '/teacher/teacher_register',
  developer:'/openplatform/developer_register'
}

const logMap = {
  student: '/user/student_login',
  teacher: '/teacher/teacher_login',
  developer:'/openplatform/developer_login'
}

const api = {
  captcha: '/user/captcha'
}

//loginType = student：学生，loginType = teacher：教师
export function login (parms) {
  return requestService({
    url: logMap[parms.loginType],
    method: 'post',
    data: parms.data
  })
}

export function regiser (parms) {
  return requestService({
    url: regMap[parms.loginType],
    method: 'post',
    data: parms.data
  })
}

export function captcha (parms) {
  return requestService({
    url: api.captcha,
    method: 'post',
    data: parms.data
  })
}
