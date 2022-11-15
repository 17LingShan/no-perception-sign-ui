<template>
  <a-card>
    <a-row>
      <a-col>
        <a-input />
      </a-col>
      <a-col>
        <a-button type="primary">搜索</a-button>
      </a-col>
    </a-row>
    <a-row style="margin-top: 50px;">
      <a-col :span="24">
        <a-table :columns="course.columns" :data-source="course.data"></a-table>
      </a-col>
    </a-row>
  </a-card>
</template>
<script setup>
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { inquireCourse, inquireAttendance } from '@/api/teacher'

const route = useRoute()

const course = reactive({
  data: null,
  loading: false,
  columns: [
    {
      title: '课程代码',
      dataIndex: 'course_id',
      key: 'course_id',
      align: 'center',
      width: '10%'
    },
    {
      title: '课程名称',
      dataIndex: 'course_name',
      key: 'course_name',
      align: 'center'
    },
    {
      title: '课程节次',
      dataIndex: 'lessons_time',
      key: 'lessons_time',
      align: 'center'
    },
    {
      title: '学号',
      dataIndex: 'student_id',
      key: 'student_id',
      align: 'center'
    },
    {
      title: '时间',
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
  console.log(route.query)
  if (route.query.course_id) {
    console.log(route.query)
    const parms = {
      course_id: route.query.course_id
    }
    searchCourseAttendance(parms)

  }
})

const searchCourseAttendance = (course_id) => {
  course.loading = true
  inquireAttendance(course_id).then(res => {
    console.log(res)
    course.data = res.data.message
  })
}
</script>

<style lang="scss" scoped>

</style>