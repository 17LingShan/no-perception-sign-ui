<template>
  <a-card style="height:100%">
    <a-table :columns="course.columns" :data-source="course.data">
    </a-table>
  </a-card>
</template>
<script setup>
import { inquireAttendance, inquireJoinCourse } from '@/api/student'
import { onMounted, reactive } from 'vue'

const course = reactive({
  data: null,
  columns: [
    {
      title: '课程名称',
      dataIndex: 'course_name',
      key: 'course_name'
    },
    {
      title: '出勤时间',
      dataIndex: 'attendance_time',
      key: 'attendance_time'
    },
    {
      title: '状态',
      dataIndex: 'attendance_state',
      key: 'attendance_state'
    }
  ]
})


onMounted(() => {
  inquireAttendance().then((res) => {
    course.data = res.data.message
    console.log(res.data.message)
  })
})
</script>

<style lang="scss" scoped>
.course-table {
  min-height: 50%;
}
</style>