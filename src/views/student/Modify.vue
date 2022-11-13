<template>
  <a-card>
    <a-row>
      <a-col>
        <a-button type="primary" @click="() => addModal.visiable = true">添加课程</a-button>
      </a-col>
      <a-col :offset="1">
        <a-button type="primary">刷新</a-button>
      </a-col>
    </a-row>
    <a-row style="margin-top: 50px;">
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
  <AddCourseModal :visible="addModal.visiable" @close="closeModal" />

</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { userStore } from '@/store/user'
import { inquireJoinCourse, quitCourse } from '@/api/student'
import { message } from 'ant-design-vue';
import AddCourseModal from './components/AddCourseModal'

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

const addModal = reactive({
  visiable: false
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
  quitCourse(parms).then(res => {
    console.log(res)
    res.data.code === 200 ? message.success({ content: res.message }) : message.error({ content: '退出课程失败！' })
    getJoinCourse()
  }).catch((err) => {
    console.log(err)
  })
  setTimeout(() => course.loading = false, 500)
}

const closeModal = () => {
  addModal.visiable = false

}
</script>

<style lang="scss" scoped>

</style>