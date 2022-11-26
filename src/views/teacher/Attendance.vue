<template>
  <a-card>
    <a-row>
      <a-col>
        <a-input-search v-model:value="course.course_id" enter-button="搜索课号" @search="searchCourseAttendance(course)" />
      </a-col>
    </a-row>
    <a-row style="margin-top: 50px;" v-if="course.data">
      <a-col :span="24">
        <a-table :columns="course.columns" :data-source="course.data">
          <template #bodyCell="{ column, record }">
            <template v-if="column.dataIndex === 'attendance_state'">
              <span>
                <a-tag style="cursor: pointer;" :color="record.attendance_state === '出勤' ? 'green' : 'red'"
                  @click="changeAttendance">
                  {{ record.attendance_state }}
                </a-tag>
              </span>
            </template>
          </template>
        </a-table>
      </a-col>
    </a-row>
  </a-card>
</template>
<script setup>
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import moment from 'moment'
import { inquireAttendance } from '@/api/teacher'
import { message } from 'ant-design-vue';

const route = useRoute()

const course = reactive({
  data: null,
  loading: false,
  course_id: null,
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
    const parms = {
      course_id: route.query.course_id
    }
    searchCourseAttendance(parms)
  }
})

const searchCourseAttendance = async (parms) => {
  course.loading = true
  const args = {
    course_id: parms.course_id
  }
  await inquireAttendance(args).then(res => {
    if (res.data.code === 200) {
      res.data.message.forEach((item, index, arr) => {
        arr[index].attendance_time = moment(item.attendance_time).format('YYYY-MM-DD hh:mm:ss')
      })
      course.data = res.data.message
    } else {
      message.error({ content: res.data.message })
      course.data = null
    }
  })
}

const changeAttendance = () => {
}
</script>

<style lang="scss" scoped>

</style>