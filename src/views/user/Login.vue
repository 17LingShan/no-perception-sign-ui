<template>
  <div class="main">

    <a-tabs tabPosition="top" v-model:activeKey="tabs.activeKey" centered>
      <a-tab-pane key="student" tab="学生登录" />
      <a-tab-pane key="teacher" tab="教师登录" />
    </a-tabs>
    <a-form ref="userForm" :model="loginInfo">
      <a-form-item name="email" :rules="[{ required: true, message: 'Please input your username!' }]">
        <a-input id="loginEmail" v-model:value="loginInfo.email" size="large" type="text" placeholder="邮箱">
          <template #prefix>
            <MailOutlined style="margin-right: 5px" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item name="password" :rules="[{ required: true, message: 'Please input your username!' }]">
        <a-input v-model:value="loginInfo.password" size="large" type="password" placeholder="密码">
          <template #prefix>
            <LockOutlined style="margin-right: 5px" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item name="autoLogin">
        <a-checkbox v-model:checked="loginInfo.autoLogin" @change="checkedChange">自动登录</a-checkbox>
        <router-link :to="{ name: 'register' }">
          <a href="javascript:;" style="float: right">注册</a>
        </router-link>
      </a-form-item>

      <a-form-item>
        <a-button type="primary" style="width: 100%; margin-top: 10px;" @click="login">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { userStore } from '@/store/user'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { LockOutlined, MailOutlined } from '@ant-design/icons-vue'

const piniaUser = userStore()
const router = useRouter()

const userForm = ref()

const tabs = reactive({
  activeKey: 'student'
})
const loginInfo = reactive({
  userType: null,
  email: null,
  password: null,
  autoLogin: false,
})


const login = () => {
  userForm.value.validateFields().then(async (values) => {
    const data = new FormData()
    data.append('email', values.email)
    data.append('password', values.password)
    const loginType = tabs.activeKey
    await piniaUser.Login({ data, loginType }).then(res => {
      if (res.data.code === 200) {
        message.success({ content: '登录成功！' })
        router.push({ path: '/' })
      } else {
        message.warn({ content: '登录失败！请检查账号密码是否正确！' })
      }
    }).catch((err) => {
      console.log(err)
      message.warn({ content: '登录失败！请检查账号密码是否正确！' })
    })
    userForm.value.resetFields()
  }).catch(err => {
    message.warn({ content: '登录失败！请检查账号密码是否正确！' })
  })
}

const checkedChange = () => {
  console.log(loginInfo.autoLogin)
}
</script>

<style lang="scss">
.ant-tabs-tab {
  min-width: 100px;
  justify-content: center;
  font-size: 18px;
}
</style>