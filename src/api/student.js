import { requestService } from '@/utils/request'

const api = {
  attendance: '/user/inquire_attendance',
  joinCourse: '/user/join_course',
  quitCourse: '/user/quit_course',
  inquireJoinCourse: '/user/inquire_joincourse'
}

export function attendance (parms) {
  return requestService({
    url: api.attendance,
    method: 'get',
    data: parms
  })
}

export function joinCourse (parms) {
  return requestService({
    url: api.joinCourse,
    method: 'post',
    data: parms
  })
}

export function inquireJoinCourse () {
  return requestService({
    url: api.inquireJoinCourse,
    method: 'post'
  })
}