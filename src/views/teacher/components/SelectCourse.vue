<template>
  <a-modal :title="`课程代码：${courseData.course_id}-${courseData.course_name}`" :visible="props.visible"
    @cancel="closeModal" centered>

  </a-modal>
</template>

<script setup>
import { reactive, toRaw, onUpdated } from 'vue';

const emit = defineEmits(['close'])
const props = defineProps({
  visible: Boolean,
  record: Object
})

const courseData = reactive({
  confirmLoading: false,
  course_id: null,
  course_name: null,
  teacher_id: null
})

onUpdated(() => {
  courseData.course_id = props.record.id
  courseData.course_name = props.record.course_name
  courseData.teacher_id = props.record.teacher_id
})



const closeModal = () => {

  emit('close')
}
</script>