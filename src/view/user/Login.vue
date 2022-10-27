<template>
  <div class="login-main">
    <a-form id="login-form">
      <a-tabs v-model:activeKey="tabs.activeKey" :tabBarStyle="tabStyle" centered>
        <a-tab-pane key="login" tab="登录" >登录</a-tab-pane>
        <a-tab-pane key="register" tab="注册">注册</a-tab-pane>
      </a-tabs>
    </a-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const tabStyle = {
  fontSize: '50px'
}

const tabs = reactive({
  activeKey: 'login'
})
</script>

<style lang="scss" scoped>
.login-main {
  label {
    font-size: 14px;
  }
}

.ant-tabs-nav-wrap {
  color: red;
}
</style>