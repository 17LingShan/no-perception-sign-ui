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
    <a-form
      ref="registerForm"
      :model="registerInfo"
    >
      <a-form-item
        name="email"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input
          id="registerEmail"
          v-model:value="registerInfo.email"
          size="large"
          type="text"
          placeholder="邮箱"
        >
          <template #prefix>
            <MailOutlined style="margin-right: 5px" />
          </template>
        </a-input>
      </a-form-item>
      <a-row :gutter="16">
        <a-col :span="16">
          <a-form-item
            name="captcha"
            :rules="[{ required: true, message: 'Please input your captcha!' }]"
          >
            <a-input
              id="registerCaptcha"
              v-model:value="registerInfo.captcha"
              size="large"
              type="text"
              placeholder="验证码"
            >
              <template #prefix>
                <VerifiedOutlined style="margin-right: 5px" />
              </template>
            </a-input>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-button
            style="width:100%; height: 40px"
            @click="getCaptcha"
          >发送</a-button>
        </a-col>
      </a-row>
      <a-form-item
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input
          id="registerUsername"
          v-model:value="registerInfo.username"
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
        name="userId"
        :rules="[{ required: true, message: 'Please input your userId!' }]"
      >
        <a-input
          id="registerUserId"
          v-model:value="registerInfo.userId"
          size="large"
          type="text"
          placeholder="工号/学号"
        >
          <template #prefix>
            <IdcardOutlined style="margin-right: 5px" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input
          id="registerPassword"
          v-model:value="registerInfo.passowrd"
          size="large"
          type="text"
          placeholder="密码"
        >
          <template #prefix>
            <LockOutlined style="margin-right: 5px" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <router-link :to="{ name:'login' }">
          <a
            href="javascript:;"
            style="float:right"
          >登录</a>
        </router-link>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { captcha } from '@/api/user'
import { UserOutlined, LockOutlined, MailOutlined, IdcardOutlined, VerifiedOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'

const registerForm = ref()

const tabs = reactive({
  activeKey: 'student'
})
const registerInfo = reactive({
  userType: null,
  email: null,
  username: null,
  passowrd: null,
  captcha: null,
  userId: null
})

const getCaptcha = () => {
  registerForm.value.validateFields(['email']).then(async values => {
    const data = new FormData()
    data.append('email', values.email)
    await captcha({ data }).then(res => {
      if (res.data.code === 200) message.success({ content: '发送成功！' })
      else message.error({ content: '发送失败！' })
      console.log(res);
    }).catch(err => {
      console.log(err)
    })
  }).catch(err => {
    console.log(err)
  })
}



</script>

<style lang="scss" scoped>
:global(.ant-tabs-tab) {
  min-width: 100px;
  justify-content: center;
  font-size: 16px;
}
</style>