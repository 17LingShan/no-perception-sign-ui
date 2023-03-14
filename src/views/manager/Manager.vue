<template>
  <a-card>
    <a-row>
      <a-col :span="24">
        <a-tabs v-model:activeKey="activeKey" tab-position="left" :style="{ minHeight: '30rem' }">
          <a-tab-pane key="allDeveloper" tab="所有申请权限">
            <a-table :columns="allAppCol" :data-source="applicationTable.allApp" :loading="applicationTable.loading">
              <template #bodyCell="{ column, record }">
                <template v-if="column.dataIndex === 'flag'">
                  <a-tag :color="record.flag === 1 ? 'green' : 'red'">
                    {{ record.flag === 1 ? "拥有权限" : "未拥有权限" }}
                  </a-tag>
                </template>
                <template v-if="column.dataIndex === 'operation' && record.flag === 1">
                  <a-popconfirm title="确定需要取消权限吗？" @confirm="handleDel(record)">
                    <a href="javascript:;"> 取消权限 </a>
                  </a-popconfirm>
                </template>
              </template>
            </a-table>
          </a-tab-pane>

          <a-tab-pane key="nowDeveloper" tab="正在申请权限">
            <a-table :columns="currentAppCol" :data-source="applicationTable.currentApp" :loading="applicationTable.loading">
              <template #bodyCell="{ column, record }">
                <template v-if="column.dataIndex === 'confirm'">
                  <a-popconfirm title="请确认申请信息" cancelText="拒绝" okText="同意" @cancel="handleRefuse(record)" @confirm="handleAgree(record)">
                    <a-tag color="blue" style="cursor: pointer"> 申请中 </a-tag>
                  </a-popconfirm>
                </template>
              </template>
            </a-table>
          </a-tab-pane>
        </a-tabs>
      </a-col>
    </a-row>
  </a-card>
</template>
<script setup>
import { onMounted, reactive, ref, resolveDirective } from "vue";
import { queryCurrentApp, agreeApp, refuseApp, queryAllApp, delApp } from "@/api/manager";
import { message } from "ant-design-vue";

const activeKey = ref();

const allAppCol = [
  {
    title: "申请人ID",
    dataIndex: "id",
    key: "id",
    align: "center",
    width: "40%",
  },
  {
    title: "申请人状态",
    dataIndex: "flag",
    key: "flag",
    align: "center",
  },
  {
    title: "修改权限",
    dataIndex: "operation",
    align: "center",
    width: "10%",
  },
];

const currentAppCol = [
  {
    title: "待申请id",
    dataIndex: "id",
    key: "id",
    align: "center",
    width: "10%",
  },
  {
    title: "待申请名称",
    dataIndex: "name",
    key: "name",
    align: "center",
    width: "10%",
  },
  {
    title: "申请理由",
    dataIndex: "reason",
    key: "reason",
    align: "center",
  },
  {
    title: "确认",
    dataIndex: "confirm",
    key: "confirm",
    align: "center",
    width: "10%",
  },
];

const applicationTable = reactive({
  loading: false,
  allApp: [],
  currentApp: [],
});

onMounted(() => {
  loadApp();
});

const loadApp = async () => {
  await loadAllApp();
  await loadCurrentApp();
};

const loadAllApp = () => {
  applicationTable.loading = true;
  queryAllApp()
    .then((res) => {
      if (res.data.code === 200) {
        applicationTable.allApp = res.data.message;
      }
    })
    .catch((err) => {
      message.error({ content: "错误信息！" });
    });

  setTimeout(() => {
    applicationTable.loading = false;
  }, 300);
};

const loadCurrentApp = () => {
  applicationTable.loading = true;

  queryCurrentApp()
    .then((res) => {
      if (res.data.code === 200) {
        applicationTable.currentApp = res.data.message;
      }
    })
    .catch((err) => {
      message.error({ content: "错误信息！" });
    });

  setTimeout(() => {
    applicationTable.loading = false;
  }, 300);
};

const handleAgree = async (record) => {
  await agreeApp({ id: record.id })
    .then((res) => {
      if (res.data.code === 200) {
        message.success({ content: "接受申请！" });
      }
    })
    .catch((err) => {
      message.error({ content: "错误信息！" });
    });
  loadApp();
};

const handleRefuse = async (record) => {
  await refuseApp({ id: record.id })
    .then((res) => {
      if (res.data.code === 200) {
        message.success({ content: "拒绝申请！" });
      }
    })
    .catch((err) => {
      message.error({ content: "错误信息！" });
    });
  loadApp();
};

const handleDel = async (record) => {
  await delApp({ id: record.id })
    .then((res) => {
      if (res.data.code === 200) {
        message.success({ content: "取消成功！" });
      }
    })
    .catch((err) => {
      message.error({ content: "错误信息！" });
    });

  loadApp();
};
</script>

<style lang="scss" scoped></style>
