<template>
  <a-modal
    title="添加课程"
    :confirmLoading="courseData.confirmLoading"
    :visible="props.visible"
    @ok="addCourse"
    @cancel="closeModal"
    centered
  >
    <a-form ref="courseForm" :model="courseData">
      <a-form-item
        label="课程名称"
        name="course_name"
        :rules="[{ required: true, message: 'Please input your courseId!' }]"
      >
        <a-input
          id="course_name"
          v-model:value="courseData.course_name"
          size="large"
          type="text"
        />
      </a-form-item>
      <a-form-item
        label="课程代码"
        name="course_id"
        :rules="[{ required: true, message: 'Please input your courseId!' }]"
      >
        <a-input
          id="course_id"
          v-model:value="courseData.course_id"
          size="large"
          type="text"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup>
import { reactive, ref } from "vue";
import { createCourse } from "@/api/teacher";
import { message } from "ant-design-vue";
const emit = defineEmits(["close"]);
const props = defineProps({
  visible: Boolean,
});

const courseForm = ref();
const courseData = reactive({
  confirmLoading: false,
  course_id: null,
  course_name: null,
});

const addCourse = async () => {
  courseData.confirmLoading = true;
  await courseForm.value.validateFields().then((values) => {
    createCourse(values)
      .then((res) => {
        res.data.code === 200
          ? message.success({ content: "加入成功！" })
          : message.error({ content: res.data.message });
      })
      .catch((err) => {
        message.success({ content: "加入失败！" });
      });
  });
  courseForm.value.resetFields();
  setTimeout(() => {
    courseData.confirmLoading = false;
    closeModal();
  }, 500);
};

const closeModal = () => {
  emit("close");
};
</script>

<style lang="scss" scoped></style>
