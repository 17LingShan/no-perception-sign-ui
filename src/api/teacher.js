import { requestService } from "@/utils/request";

const api = {
  inquireAttendance: "/teacher/inquire_attendance",
  createCourse: "/teacher/create_course",
  attendanceRecord: "/teacher/attendance_record",
  checkCourseExist: "/teacher/check_course_exist",
  inquireCourse: "/teacher/inquire_course",
  inquireAttendanceRecord: "/teacher/inquire_attendenceRecord",
  inputAttendanceRecord: "/teacher/input_attendenceRecord",
};

export function inquireAttendance(parms) {
  return requestService({
    url: api.inquireAttendance,
    method: "post",
    data: parms,
  });
}

export function createCourse(parms) {
  return requestService({
    url: api.createCourse,
    method: "post",
    data: parms,
  });
}

export function attendanceRecord(parms) {
  return requestService({
    url: api.attendanceRecord,
    method: "post",
    data: parms,
  });
}

export function checkCourseExist(parms) {
  return requestService({
    url: api.checkCourseExist,
    method: "post",
    data: parms,
  });
}

export function inquireCourse() {
  return requestService({
    url: api.inquireCourse,
    method: "post",
  });
}

export function inquireAttendanceRecord(parms) {
  return requestService({
    url: api.inquireAttendanceRecord,
    method: "post",
    data: parms,
  });
}
