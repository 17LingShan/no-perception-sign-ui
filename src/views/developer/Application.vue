<template>
  <a-card title=" 申请开发权限" class="content">
    <a-row>
      <a-col :span="12" :offset="6">
        <a-form ref="developerForm" :model="developer">
          <a-form-item name="reason" label="申请理由" :rules="[{ required: true, message: 'Please input your reason!' }]">
            <a-textarea v-model:value="developer.reason" />
          </a-form-item>
          <a-form-item>
            <a-button type="primary" style="width: 100%; margin-top: 10px" @click="apply"> 申请 </a-button>
          </a-form-item>
        </a-form>
      </a-col>
    </a-row>
  </a-card>
</template>

<script setup>
import { reactive, ref } from "vue";
import { applyPermission } from "@/api/developer";
import { message } from "ant-design-vue";

const developerForm = ref();

const developer = reactive({
  reason: "",
});

const apply = () => {
  developerForm.value
    .validateFields()
    .then(async (values) => {
      const data = {
        reason: values.reason,
      };
      await applyPermission(data)
        .then((res) => {
          if (res.code === 200) {
            message.info({ content: "申请推送成功，请耐心等待审核！" });
          } else {
            message.info({ content: "正在申请中，请耐心等待审核！" });
          }
        })
        .catch((err) => {
          message.error({ content: "申请失败！" });
        });
    })
    .catch((err) => {
      message.warn({ content: "请输入申请理由！" });
    });
};
</script>
<style lang="scss" scoped>
.content {
  min-height: 50rem;
}
</style>
