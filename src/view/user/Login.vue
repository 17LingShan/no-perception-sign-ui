<template>
  <div class="login-main">
    <a-form
      id="login-form"
      ref="userForm"
      :model="user"
      layout="vertical"
    >
      <a-tabs
        tabPosition="top"
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
                <MailOutlined style="margin-right: 5px" />
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
          <a-form-item
            name="username"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <a-input
              v-model:value="user.username"
              size="large"
              type="text"
              placeholder="用户名"
            >
              <template #prefix>
                <UserOutlined style="margin-right: 5px" />
              </template>
            </a-input>
          </a-form-item>

          <a-form-item
            name="studentId"
            :rules="[{ required: true, message: 'Please input your studentId!' }]"
          >
            <a-input
              v-model:value="user.studentId"
              size="large"
              type="text"
              placeholder="学号"
            >
              <template #prefix>
                <IdcardOutlined style="margin-right: 5px" />
              </template>
            </a-input>
          </a-form-item>

          <a-form-item
            name="email"
            :rules="[{ required: true, message: 'Please input your email!' }]"
          >
            <a-input
              v-model:value="user.email"
              size="large"
              type="text"
              placeholder="邮箱"
            >
              <template #prefix>
                <MailOutlined style="margin-right: 5px" />
              </template>
            </a-input>
          </a-form-item>

          <a-form-item
            name="password"
            :rules="[{ required: true, message: 'Please input your password!' }]"
          >
            <a-input
              v-model:value="user.password"
              size="large"
              type="password"
              placeholder="密码"
            >
              <template #prefix>
                <LockOutlined style="margin-right: 5px" />
              </template>
            </a-input>
          </a-form-item>

          <a-row :gutter="16">
            <a-col>
              <a-form-item :span="16">
                <a-input
                  v-model:value="user.captcha"
                  size="large"
                  type="text"
                  placeholder="验证码"
                >
                  <template #prefix>
                    <MailOutlined style="margin-right: 5px" />
                  </template>
                </a-input>
              </a-form-item>
            </a-col>

            <a-col :span="8">
              <a-button style="height: 40px; width: 100%">获取验证码</a-button>
            </a-col>
          </a-row>

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
            >注册</a-button>
          </a-form-item>
        </a-tab-pane>
      </a-tabs>
    </a-form>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { useStore, mapActions } from 'vuex'
import { UserOutlined, LockOutlined, MailOutlined, IdcardOutlined } from '@ant-design/icons-vue'

const tabs = reactive({
  activeKey: 'register'
})

const userForm = ref()
const store = useStore()  // store

const user = reactive({
  email: null,
  username: null,
  studentId: null,
  password: null,
  captcha: null,
  autoLogin: false,
})
const getLogin = () => {
  userForm.value.validateFields().then(async (values)=> {
    const data = new FormData()
    data.append('email', values.email)
    data.append('password', values.password)
    await store.dispatch('Login', data).then(res => {
      console.log(res)
    })
    userForm.value.resetFields()
  })
}

const register = () => {
  userForm.value.validateFields().then(async (value) => {
    const data = new FormData()

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