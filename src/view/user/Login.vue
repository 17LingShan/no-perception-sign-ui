<template>
  <div class="login-main">
    <a-form
      id="login-form"
      ref="userForm"
      :model="user"
      layout="vertical"
    >
      <a-tabs
        v-model:activeKey="tabs.activeKey"
        centered
      >
        <a-tab-pane
          key="login"
          tab="登录"
        >
          <a-form-item
            name="email"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <a-input
              v-model:value="user.email"
              size="large"
              type="text"
              placeholder="账户：admin"
            >
              <template #prefix>
                <UserOutlined style="margin-right: 5px" />
              </template>
            </a-input>
          </a-form-item>

          <a-form-item
            name="password"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <a-input
              v-model:value="user.password"
              size="large"
              type="password"
              placeholder="密码：123456"
            >
              <template #prefix>
                <LockOutlined style="margin-right: 5px" />
              </template>
            </a-input>
          </a-form-item>

          <a-form-item name="autoLogin">
            <a-checkbox
              v-model:checked="user.autoLogin"
              @change="checkedChange"
            >自动登录</a-checkbox>
            <a
              href="javascript:;"
              style="float: right"
            >忘记密码</a>
          </a-form-item>

          <a-form-item>
            <a-button
              type="primary"
              style="width: 100%; margin-top: 10px;"
              @click="getLogin"
            >登录</a-button>
          </a-form-item>
        </a-tab-pane>

        <a-tab-pane
          key="register"
          tab="注册"
        >
          <a-form-item>
            <a-input
              size="large"
              type="text"
              placeholder="账户：admin"
            >
              <template #prefix>
                <UserOutlined style="margin-right: 5px" />
              </template>
            </a-input>
          </a-form-item>

          <a-form-item>
            <a-input
              size="large"
              type="password"
              placeholder="密码：123456"
            >
              <template #prefix>
                <LockOutlined style="margin-right: 5px" />
              </template>
            </a-input>
          </a-form-item>

          <a-form-item>
            <a-checkbox
              v-model:checked="user.autoLogin"
              @change="checkedChange"
            >自动登录</a-checkbox>
            <a
              href="javascript:;"
              style="float: right"
            >忘记密码</a>
          </a-form-item>

          <a-form-item>
            <a-button
              type="primary"
              style="width: 100%; margin-top: 10px;"
              @click="getLogin"
            >登录</a-button>
          </a-form-item>
        </a-tab-pane>
      </a-tabs>
    </a-form>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { useStore, mapActions } from 'vuex'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'

const tabs = reactive({
  activeKey: 'login'
})

const userForm = ref()
const store = useStore()  // store

const user = reactive({
  email: null,
  password: null,
  autoLogin: false
})
const getLogin = () => {
  userForm.value.validateFields().then(async (res)=> {
    const data = new FormData()
    data.append('email', res.email)
    data.append('password', res.password)
    await store.dispatch('Login', data).then(res => {
      console.log(res)
    })
    userForm.value.resetFields()
  })
}

const checkedChange = () => {
  console.log(user.autoLogin)
}
</script>

<style lang="scss" scoped>
:global(.ant-tabs-tab) {
  min-width: 100px;
  justify-content: center;
  font-size: 16px;
}


</style>