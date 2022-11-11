import { requestService } from '@/utils/request'

const api = {
  studentLogin: '/user/student_login',
  teacherLogin: '/teacher/teacher_login',
  studentRegister: '/user/student_register',
  teacherRegister: '/teacher/teacher_register',
  captcha: '/user/captcha'
}

//loginType = student：学生，loginType = teacher：教师
export function login (parms) {
  return requestService({
    url: parms.loginType === 'teacher' ? api.teacherLogin : api.studentLogin,
    method: 'post',
    data: parms.data
  })
}

export function regiser (parms) {
  return requestService({
    url: parms.loginType === 'teacher' ? api.teacherRegister : api.studentRegister,
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
