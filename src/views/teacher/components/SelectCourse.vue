<template>
  <a-modal :title="`课程代码：${courseData.course_id}-${courseData.course_name}`" :visible="props.visible" @cancel="closeModal" width="40%" centered>
    <a-table :columns="selCourse.columns" :data-source="selCourse.data">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <a href="javascript:;" @click="handleModify(record)">查看考勤情况</a>
        </template>
      </template>
    </a-table>
  </a-modal>
</template>

<script setup>
import { reactive, defineExpose, watch } from "vue";
import { useRouter } from "vue-router";
import { inquireAttendanceRecord } from "@/api/teacher";
import { message } from "ant-design-vue";

const emit = defineEmits(["close"]);
const props = defineProps({
  visible: Boolean,
  record: Object,
});

const router = useRouter();
const selCourse = reactive({
  data: null,
  columns: [
    {
      title: "课程名称",
      dataIndex: "course_name",
      key: "course_name",
    },
    {
      title: "课程时间",
      dataIndex: "lessons_time",
      key: "lessons_time",
    },
    {
      title: "考勤时间",
      dataIndex: "attendance_time",
      key: "attendance_time",
    },
    {
      title: "操作",
      key: "action",
    },
  ],
});

watch(
  () => props.record,
  (newRecord) => {
    setInfo();
    getCourseAttendance();
  }
);

const courseData = reactive({
  confirmLoading: false,
  course_id: null,
  course_name: null,
  teacher_id: null,
});

const setInfo = () => {
  courseData.course_id = props.record.id;
  courseData.course_name = props.record.course_name;
  courseData.teacher_id = props.record.teacher_id;
};

const getCourseAttendance = () => {
  selCourse.data = null;
  inquireAttendanceRecord({ course_id: courseData.course_id }).then((res) => {
    if (res.data.code === 200) {
      selCourse.data = res.data.message;
    } else {
      message.warn({ content: res.data.message });
    }
  });
};

const handleModify = (record) => {
  router.push({
    name: "attendance",
    query: {
      course_id: record.course_id,
      attendance_time: record.attendance_time,
      lessons_time: record.lessons_time,
    },
  });
};

const closeModal = () => {
  emit("close");
};

defineExpose({
  setInfo,
});
</script>
