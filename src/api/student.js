import { requestService } from '@/utils/request'

const api = {
  inquireAttendance: '/user/inquire_attendance',
  joinCourse: '/user/join_course',
  quitCourse: '/user/quit_course',
  inquireJoinCourse: '/user/inquire_joincourse'
}

export function inquireAttendance () {
  return requestService({
    url: api.inquireAttendance,
    method: 'post'
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