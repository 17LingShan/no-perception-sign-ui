import { requestService } from '@/utils/request'

const api = {
  studentLogin: '/user/student_login',
  teacherLogin: '/user/teacher_login',
  regiser: '/user/student_register',
  captcha: '/user/captcha'
}

//loginType = 0：学生，loginType = 1：教师
export function login (data, loginType) {
  return requestService({
    url: loginType ? api.teacherLogin : api.studentLogin,
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