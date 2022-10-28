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

        <a-form-item>
          <a-checkbox v-model:checked="user.autoLogin" @change="checkedChange" >自动登录</a-checkbox>
          <a href="javascript:;" style="float: right">忘记密码</a>
        </a-form-item>

        <a-form-item>
          <a-button type="primary" style="width: 100%; margin-top: 10px;">登录</a-button>
        </a-form-item>
        </a-tab-pane>

        <a-tab-pane key="register" tab="注册">
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

        <a-form-item>
          <a-checkbox v-model:checked="user.autoLogin" @change="checkedChange" >自动登录</a-checkbox>
          <a href="javascript:;" style="float: right">忘记密码</a>
        </a-form-item>

        <a-form-item>
          <a-button type="primary" style="width: 100%; margin-top: 10px;" @click="getLogin" >登录</a-button>
        </a-form-item>
        </a-tab-pane>
      </a-tabs>
    </a-form>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { login } from '@/api/user'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
const tabs = reactive({
  activeKey: 'login'
})

onMounted(()=> {
  console.log(1)
  login()
})

const user = reactive({
  username: null,
  password: null,
  autoLogin: false
})

const getLogin = () => {

}

const checkedChange = () => {
  console.log(user.autoLogin);
}
</script>

<style lang="scss" scoped>
:global(.ant-tabs-tab) {
  min-width: 100px;
  justify-content: center;
  font-size: 16px;
}


</style>