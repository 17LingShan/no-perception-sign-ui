<template>
  <div class="login-main">

    <a-form id="login-form">
      <a-tabs v-model:activeKey="tabs.activeKey" centered>
        <a-tab-pane key="login" tab="登录" >
          <a-form-item >
            <a-input size="large"
            type="text"
            placeholder="账户：admin"
          >
              <template #prefix>
              <UserOutlined style="margin-right: 5px" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item >
            <a-input size="large"
            type="password"
            placeholder="密码：123456"
          >
              <template #prefix>
              <LockOutlined style="margin-right: 5px" />
              </template>
            </a-input>
          </a-form-item>
        </a-tab-pane>
        <a-tab-pane key="register" tab="注册">注册</a-tab-pane>
      </a-tabs>
    </a-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'

const tabs = reactive({
  activeKey: 'login'
})
</script>

<style lang="scss" scoped>
:global(.ant-tabs-tab) {
  min-width: 100px;
  justify-content: center;
  font-size: 16px;
}


</style>