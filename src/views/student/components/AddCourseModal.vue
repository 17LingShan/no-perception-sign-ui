<template>
  <a-modal title="添加课程" :visible="props.visible" @cancel="() => emit('close')" centered>
    <a-form ref="courseForm" :model="courseData">
      <a-form-item label="课程代码" name="course_id" :rules="[{ required: true, message: 'Please input your courseId!' }]">
        <a-input v-model:value="courseData.student_id" type="text" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup>
import { defineEmits, reactive, ref } from 'vue';

const emit = defineEmits(['close'])
const props = defineProps({
  visible: Boolean
})

const courseForm = ref()
const courseData = reactive({
  student_id: null
})



</script>

<style lang="scss">

</style>