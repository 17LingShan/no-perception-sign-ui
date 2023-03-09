<template>
  <a-card>
    <a-row>
      <a-col :span="24">
        <a-tabs
          v-model:activeKey="activeKey"
          tab-position="left"
          :style="{ height: '100%', minHeight: '30rem' }"
        >
          <a-tab-pane key="allDeveloper" tab="所有申请权限">
            Content of tab
          </a-tab-pane>
          <a-tab-pane key="nowDeveloper" tab="正在申请权限">
            Content of tab1
          </a-tab-pane>
        </a-tabs>
      </a-col>
    </a-row>
  </a-card>
</template>
<script setup>
import { onMounted, reactive, ref } from "vue";

const activeKey = ref();
</script>

<style lang="scss" scoped>
//
</style>
