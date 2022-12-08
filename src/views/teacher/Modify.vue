<template>
  <a-card>
    <a-row>
      <a-col>
        <a-button type="primary" @click="() => addModal.visible = true">添加课程</a-button>
      </a-col>
    </a-row>
    <a-row style="margin-top: 50px;">
      <a-col :span="24">
        <a-table :loading="course.loading" :columns="course.columns" :data-source="course.data">
          <template #bodyCell="{ column, record }">
            <template v-if="column.dataIndex === 'course_name'">
              <a href="javascript:;" @click="searchAttendance(record)">{{ record.course_name }}</a>
            </template>
          </template>
        </a-table>
      </a-col>
    </a-row>
  </a-card>
  <AddCourseModal :visible="addModal.visible" @close="closeAddModal" />
  <SelectCourse ref="selCourse" :visible="selectModal.visible" :record="selectModal.record" @close="closeSelModal" />
</template>
<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { inquireCourse } from '@/api/teacher'
import AddCourseModal from './components/AddCourseModal'
import SelectCourse from './components/SelectCourse.vue'

const router = useRouter()

const course = reactive({
  data: null,
  loading: false,
  columns: [
    {
      title: '课程代码',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
      width: '20%'
    },
    {
      title: '课程名称',
      dataIndex: 'course_name',
      key: 'course_name',
      align: 'center'
    }
  ]
})

const selCourse = ref()

onMounted(() => {
  getJoinCourse()
})

const addModal = reactive({
  visible: false
})

const selectModal = reactive({
  visible: false,
  record: null
})

const closeAddModal = () => {
  addModal.visible = false
  getJoinCourse()
}

const closeSelModal = () => {
  selectModal.visible = false
  // selectModal.record = null
}

const searchAttendance = (record) => {
  selectModal.visible = true
  selectModal.record = record
}

const getJoinCourse = () => {
  course.loading = true
  inquireCourse().then(res => {
    course.data = res.data.message
    setInterval(() => course.loading = false, 500)
  })
}

</script>

<style lang="scss" scoped>

</style>