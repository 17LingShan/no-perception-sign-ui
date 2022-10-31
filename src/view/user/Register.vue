<template>
  <div class="main">
    <a-tabs
      tabPosition="top"
      v-model:activeKey="tabs.activeKey"
      centered
    >
      <a-tab-pane
        key="student"
        tab="学生注册"
      />
      <a-tab-pane
        key="teacher"
        tab="教师注册"
      />
    </a-tabs>
    <a-from ref="registerForm">

    </a-from>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const registerFrom = ref()

const tabs = reactive({
  activeKey: 'student'
})

</script>

<style lang="scss" scoped>
:global(.ant-tabs-tab) {
  min-width: 100px;
  justify-content: center;
  font-size: 16px;
}
</style>