<template>
  <div>
    1111
    <!-- <a-tabs
      tabPosition="top"
      v-model:activeKey="tabs.activeKey"
      centered
    >
      <a-tab-pane
        key="login"
        tab="邮箱登录"
      >
        <a-form
          id="login-form"
          ref="loginForm"
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
            <a
              href="javascript:;"
              style="float: right"
            >忘记密码</a>
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
        key="register"
        tab="邮箱注册"
      >

        <a-form
          id="register-form"
          ref="registerForm"
          :model="registerInfo"
        >
          <a-form-item
            name="email"
            :rules="[{ required: true, message: 'Please input your email!' }]"
          >
            <a-input
              v-model:value="registerInfo.email"
              id="registerEmail"
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
            <a-col>
              <a-form-item
                :span="16"
                name="captcha"
                :rules="[{ required: true, message: 'Please input captcha!' }]"
              >
                <a-input
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
                style="height: 40px; width: 100%"
                @click="getCaptcha"
              >{{ registerInfo.captchaBtn }}</a-button>
            </a-col>
          </a-row>

          <a-form-item
            name="username"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <a-input
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
            name="studentId"
            :rules="[{ required: true, message: 'Please input your studentId!' }]"
          >
            <a-input
              v-model:value="registerInfo.studentId"
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
            name="password"
            :rules="[{ required: true, message: 'Please input your password!' }]"
          >
            <a-input
              v-model:value="registerInfo.password"
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
            <a-checkbox
              v-model:checked="loginInfo.autoLogin"
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
              @click="register"
            >注册</a-button>
          </a-form-item>
        </a-form>
      </a-tab-pane>
    </a-tabs> -->
  </div>
</template>

<script setup>

</script>

<style lang="sass" scoped>
</style>