<template>
  <a-card>
    <a-row>
      <a-col :span="24">
        <a-table :columns="course.columns" :data-source="course.data"></a-table>
      </a-col>
    </a-row>
  </a-card>
</template>
<script setup>
import { onMounted, reactive } from 'vue'
import { inquireCourse } from '@/api/teacher'

const course = reactive({
  data: null,
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

onMounted(() => {
  inquireCourse().then(res => {
    course.data = res.data.message
    console.log(res);
  })
})
</script>

<style lang="scss" scoped>

</style>