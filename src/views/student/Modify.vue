<template>
  <a-card>
    <a-row>
      <a-col :span="24">
        <a-table :loading="course.loading" :columns="course.columns" :data-source="course.data">
          <template #bodyCell="{ column, record }">
            <template v-if="column.dataIndex === 'operation'">
              <a-popconfirm title="确定要退出吗？" @confirm="exitCourse(record)">
                <a href="javascript:;">退出课程</a>
              </a-popconfirm>
            </template>
          </template>
        </a-table>
      </a-col>
    </a-row>
  </a-card>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { userStore } from '@/store/user'
import { inquireJoinCourse, quitCourse } from '@/api/student'
import { message } from 'ant-design-vue';

const piniaUser = userStore()

const searchForm = ref()
const searchInfo = reactive({})
const course = reactive({
  data: null,
  loading: false,
  columns: [
    {
      title: '课程名称',
      dataIndex: 'course_name',
      key: 'course_name',
      align: 'center'
    },
    {
      title: '操作',
      dataIndex: 'operation',
      align: 'center',
      width: '20%'
    }
  ]
})

onMounted(() => {
  getJoinCourse()
})

const getJoinCourse = () => {
  course.loading = true
  inquireJoinCourse().then(res => {
    course.data = res.data.message
    setTimeout(() => course.loading = false, 500)
  })
}

const exitCourse = (record) => {
  course.loading = true
  const parms = {
    student_id: piniaUser.userId,
    course_id: record.course_id
  }
  console.log(JSON.stringify(parms))
  quitCourse(JSON.stringify(parms)).then(res => {
    console.log(res)
    res.code === 200 ? message.success({ content: res.message }) : message.error({ content: '退出课程失败！' })
    getJoinCourse()
  }).catch((err) => {
    console.log(err)
  })
  setTimeout(() => course.loading = false, 500)
}

</script>

<style lang="scss" scoped>

</style>