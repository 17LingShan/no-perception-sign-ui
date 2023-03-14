<template>
  <a-card>
    <a-row style="margin-top: 50px">
      <a-col :span="24">
        <a-table :columns="course.columns" :data-source="course.data" :loading="course.loading">
          <template #bodyCell="{ column, record }">
            <template v-if="column.dataIndex === 'attendance_state'">
              <a-popconfirm title="是否更改考勤信息？" cancelText="否" okText="是" @confirm="changeAttendance(record)">
                <a-tag style="cursor: pointer" :color="record.attendance_state === '出勤' ? 'green' : 'red'">
                  {{ record.attendance_state }}
                </a-tag>
              </a-popconfirm>
            </template>
          </template>
        </a-table>
      </a-col>
    </a-row>
  </a-card>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import moment from "moment";
import { inquireAttendance, attendanceRecord } from "@/api/teacher";
import { message } from "ant-design-vue";

const route = useRoute();

const course = reactive({
  data: null,
  loading: false,
  course_id: null,
  columns: [
    {
      title: "课程代码",
      dataIndex: "course_id",
      key: "course_id",
      align: "center",
      width: "10%",
    },
    {
      title: "课程名称",
      dataIndex: "course_name",
      key: "course_name",
      align: "center",
    },
    {
      title: "课程节次",
      dataIndex: "lessons_time",
      key: "lessons_time",
      align: "center",
    },
    {
      title: "学号",
      dataIndex: "student_id",
      key: "student_id",
      align: "center",
    },
    {
      title: "姓名",
      dataIndex: "student_name",
      key: "student_name",
      align: "center",
    },
    {
      title: "状态",
      dataIndex: "attendance_state",
      key: "attendance_state",
    },
  ],
});

onMounted(() => {
  if (route.query.course_id) {
    searchCourseAttendance(route.query);
  }
});

const searchCourseAttendance = async (parms) => {
  course.loading = true;

  await inquireAttendance(parms)
    .then((res) => {
      console.log(res);
      if (res.data.code === 200) {
        course.data = res.data.message;
      } else {
        message.error({ content: res.data.message });
        course.data = null;
      }
    })
    .catch((err) => {
      message.error({ content: "未知错误！" });
    });

  setTimeout(() => (course.loading = false), 300);
};

const changeAttendance = async (record) => {
  if (record.attendance_state === "出勤") {
    message.warn({ content: "已出勤！" });
  } else {
    const data = {
      course_id: record.course_id,
      student_id: record.student_id,
      lesson_time: record.lessons_time,
      attendance_time: route.query.attendance_time,
    };
    await attendanceRecord(data)
      .then((res) => {
        console.log(res);
        if (res.data.code === 200) {
          message.success({ content: "修改成功！" });
          if (route.query.course_id) {
            searchCourseAttendance(route.query);
          }
        } else {
          message.error({ content: res.data.message });
        }
      })
      .catch((err) => {
        message.error({ content: "未知错误！" });
      });
  }
};
</script>

<style lang="scss" scoped></style>
