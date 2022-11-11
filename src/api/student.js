import { requestService } from '@/utils/request'

const api = {
  studentAttendance: '/user/inquire_attendance'
}

export function attendance (parms) {
  return requestService({
    url: api.studentAttendance,
    method: 'get',
    data: parms
  })
}