<template>
  <div class="login-main">

    <a-tabs
      tabPosition="top"
      v-model:activeKey="tabs.activeKey"
      centered
    >
      <a-tab-pane
        key="student"
        tab="学生登录"
      >
        <a-form
          id="student-form"
          ref="studentForm"
          :model="loginInfo"
        >
          <a-form-item
            name="email"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <a-input
              id="loginEmail"
              v-model:value="loginInfo.email"
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
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <a-input
              v-model:value="loginInfo.password"
              size="large"
              type="password"
              placeholder="密码"
            >
              <template #prefix>
                <LockOutlined style="margin-right: 5px" />
              </template>
            </a-input>
          </a-form-item>

          <a-form-item name="autoLogin">
            <a-checkbox
              v-model:checked="loginInfo.autoLogin"
              @change="checkedChange"
            >自动登录</a-checkbox>
            <router-link :to="{name: 'register'}">
              <a
                href="javascript:;"
                style="float: right"
              >注册账号</a>
            </router-link>
          </a-form-item>

          <a-form-item>
            <a-button
              type="primary"
              style="width: 100%; margin-top: 10px;"
              @click="login"
            >登录</a-button>
          </a-form-item>
        </a-form>
      </a-tab-pane>
      <a-tab-pane
        key="teacher"
        tab="教师登录"
      >
        <a-form
          id="teacher-from"
          ref="teacherFrom"
        ></a-form>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { userStore } from '@/store/user'
// import { captcha } from '@/api/user'
import { UserOutlined, LockOutlined, MailOutlined, IdcardOutlined, VerifiedOutlined } from '@ant-design/icons-vue'

const piniaUser = userStore()


const studentForm = ref()
const teacherForm = ref()

const tabs = reactive({
  activeKey: 'student'
})
const loginInfo = reactive({
  email: null,
  password: null,
  autoLogin: false,
})


const login = () => {
  studentForm.value.validateFields().then(async (values) => {
    const data = new FormData()
    data.append('email', values.email)
    data.append('password', values.password)
    await piniaUser.Login(data).then(res => {
      console.log(res);
    })
    console.log(piniaUser.username)
    studentForm.value.resetFields()
  })
}

// const register = () => {
//   registerForm.value.validateFields().then(async (values) => {
//     const data = new FormData()
//     data.append('email', registerInfo.email)
//     data.append('captcha', registerInfo.captcha)
//     data.append('username', registerInfo.username)
//     data.append('student_id', registerInfo.studentId)
//     data.append('password', registerInfo.password)
//     data.append('password_confirm', registerInfo.password)
//     await piniaUser.Register(data).then((res) => {
//       console.log(res);
//     })
//   })
// }

// const getCaptcha = () => {
//   registerForm.value.validateFields(['email']).then(async (values) => {
//     registerInfo.captchaBtn = '验证码正在发送'
//     const data = new FormData()
//     data.append('email', values.email)
//     captcha(data).then(res => {

//       console.log(res);
//     }).catch((err) => {
//       console.log(err)
//     })
//   })
// }

const checkedChange = () => {
  console.log(loginInfo.autoLogin)
}
</script>

<style lang="scss" scoped>
:global(.ant-tabs-tab) {
  min-width: 100px;
  justify-content: center;
  font-size: 16px;
}


</style>