<template>
  <a-modal :title="`课程代码：${courseData.course_id}-${courseData.course_name}`" :visible="props.visible"
    @cancel="closeModal" width="40%" centered>
    <a-table></a-table>
  </a-modal>
</template>

<script setup>
import { reactive, defineExpose, watch } from 'vue'
import { inquireAttendanceRecord } from '@/api/teacher'

const emit = defineEmits(['close'])
const props = defineProps({
  visible: Boolean,
  record: Object
})

watch(() => props.record, (newRecord) => {
  console.log(newRecord)
  setInfo()
  getCourseAttendance()
})

const courseData = reactive({
  confirmLoading: false,
  course_id: null,
  course_name: null,
  teacher_id: null
})

const setInfo = () => {
  courseData.course_id = props.record.id
  courseData.course_name = props.record.course_name
  courseData.teacher_id = props.record.teacher_id
}

const getCourseAttendance = () => {
  inquireAttendanceRecord({ course_id: courseData.course_id }).then(res => {
    console.log(res)
  })
}

const closeModal = () => {
  emit('close')
}

defineExpose({
  setInfo
})
</script>