<template>
  <a-modal title="添加课程" :confirmLoading="courseData.confirmLoading" :visible="props.visible" @ok="addCourse"
    @cancel="closeModal" centered>
    <a-form ref="courseForm" :model="courseData">
      <a-form-item label="课程代码" name="course_id" :rules="[{ required: true, message: 'Please input your courseId!' }]">
        <a-input id="course_id" v-model:value="courseData.course_id" size="large" type="text" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { userStore } from '@/store/user'
import { joinCourse, } from '@/api/student'
import { message } from 'ant-design-vue'

const emit = defineEmits(['close'])
const props = defineProps({
  visible: Boolean
})

const piniaUser = userStore()
const courseForm = ref()
const courseData = reactive({
  course_id: null,
  confirmLoading: false
})

const closeModal = () => {
  emit('close')
}

const addCourse = async () => {
  courseForm.confirmLoading = true
  await courseForm.value.validateFields().then(values => {
    const parms = {
      course_id: values.course_id,
      student_id: piniaUser.userId
    }

    joinCourse(parms).then(res => {
      console.log(res)
      res.data.code === 200 ?
        message.success({ content: '加入成功' })
        :
        message.error({ content: '加入失败！' })
    })
  }).catch(err => {
    message.error({ content: '加入失败！' })
  })
  setTimeout(() => {
    courseForm.confirmLoading = false
    closeModal()
  }, 500)
}

</script>

<style lang="scss">

</style>