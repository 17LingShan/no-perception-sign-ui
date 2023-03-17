<template>
  <a-card>
    <template v-if="hasPermission" #title>{{ cardTitle }}, <a href="javascript:;" @click="handleCopy">点击复制您的token</a></template>
    <template v-if="!hasPermission" #title>您未获得权限！</template>
    <iframe src="/doc.html" frameborder="0" style="width: 100%; height: 100%" v-if="hasPermission"></iframe>
  </a-card>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { userStore } from "@/store/user";
import { message } from "ant-design-vue";
import { queryPermission } from "@/api/developer.js";

const piniaUser = userStore();
const cardTitle = ref("前置URL: http://47.113.203.151:5000，");
const hasPermission = ref(false);

onMounted(async () => {
  await queryPermission().then((res) => {
    hasPermission.value = res.data.message === 1 ? true : false;
  });
});

const handleCopy = () => {
  navigator.clipboard.writeText(String(piniaUser.token).replaceAll('"', ""));
  message.success({ content: "复制成功！" });
};
</script>
<style lang="scss">
.ant-card {
  height: 70vh;
  .ant-card-body {
    height: 93%;
  }
}
</style>
