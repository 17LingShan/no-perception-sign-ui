<template>
  <a-card>
    <a-row>
      <a-col :span="24">
        <a-table :loading="course.loading" :columns="course.columns" :data-source="course.data">
          <template #bodyCell="{ column, record }">
            <template v-if="column.dataIndex === 'attendance_state'">
              <span>
                <a-tag :color="record.attendance_state === '出勤' ? 'green' : 'red'">
                  {{ record.attendance_state }}
                </a-tag>
              </span>
            </template>
          </template>
        </a-table>
      </a-col>
    </a-row>
  </a-card>
</template>
<script setup>
import { onMounted, reactive } from "vue";
import moment from "moment";
import { inquireAttendance } from "@/api/student";
import { message } from "ant-design-vue";

const course = reactive({
  data: null,
  loading: true,
  columns: [
    {
      title: "课程名称",
      dataIndex: "course_name",
      key: "course_name",
      align: "center",
    },
    {
      title: "出勤时间",
      dataIndex: "attendance_time",
      key: "attendance_time",
      align: "center",
    },
    {
      title: "状态",
      dataIndex: "attendance_state",
      key: "attendance_state",
      align: "center",
    },
  ],
});

onMounted(() => {
  course.loading = true;
  inquireAttendance()
    .then((res) => {
      course.data = res.data.message;
      setTimeout(() => (course.loading = false), 500);
    })
    .catch((err) => {
      course.loading = false;
      message.error({ content: "获取数据失败！" });
    });
});
</script>

<style lang="scss" scoped>
.course-table {
  min-height: 50%;
}
</style>
