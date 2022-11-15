<template>
  <a-layout>
    <a-layout-sider :collapsed="layout.collapsed" width="15%">
      <div class="logo">
        <h1>vue</h1>
      </div>
      <a-menu mode="inline" theme="dark" v-model:selectedKeys="layout.selectedKeys" @click="temp">
        <a-sub-menu v-for="item in layout.menus" :key="item.name">
          <template #icon>
            <component :is="$antIcons[item.meta.icon]" />
          </template>
          <template v-if="!layout.collapsed" #title>
            <span>{{ item.meta.title }}</span>
          </template>
          <a-menu-item v-for="kid_item in item.children" :key="kid_item.name">
            <router-link :to="kid_item.path">
              {{ kid_item.meta.title }}
            </router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <div class="header-left" @click="changeCollapsed">
          <MenuFoldOutlined v-if="!layout.collapsed" />
          <MenuUnfoldOutlined v-if="layout.collapsed" />
        </div>

        <div class="header-right">
          <span>
            <RightContent :username="piniaUser.username" @logout="logout" />
          </span>
        </div>
      </a-layout-header>
      <a-layout-content>
        <a-page-header :title="route.meta.title" style="background-color: #ffffff; padding: 24px" />
        <div class="page-container">
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { onMounted, reactive, ref, toRaw } from 'vue'
import { userStore } from '@/store/user'
import { permissionStore } from '@/store/permission'
import { useRouter, useRoute } from 'vue-router'
import { message } from 'ant-design-vue'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import RightContent from '@/components/GlobalHeader/RightContent'

const piniaUser = userStore()
const piniaPermission = permissionStore()
const router = useRouter()
const route = useRoute()

const layout = reactive({
  menus: null,
  selectedKeys: null,
  collapsed: false
})

onMounted(() => {
  const routes = toRaw(piniaPermission.addRouters.find(item => item.path === '/'))
  layout.menus = (routes && routes.children) || []
})
const changeCollapsed = () => {
  layout.collapsed = !layout.collapsed
}

const logout = () => {
  piniaUser.Logout().then(() => {
    message.success({ content: '退出登录！' })
    router.push({ name: 'login' })
  })
}

const temp = ({ item, key, keyPath }) => {
  layout.selectedKeys = key
  console.log(layout.selectedKeys)
  console.log(item)
  console.log(key)
  console.log(keyPath)
}
</script>

<style lang="scss">
.ant-layout {
  height: 100%;

  .logo {
    height: 64px;
    background: #001529;
    text-align: center;

    h1 {
      line-height: 64px;
      font-size: 24px;
      color: #ffff;
    }
  }

  .ant-menu {
    background: #000c17;
    color: white;

    .ant-menu-submenu {
      color: white;

      .ant-menu-submenu-arrow {
        color: white;
      }
    }

    .ant-menu-submenu-active {
      color: white;
    }
  }

  .ant-layout-header {
    background: #ffff;
    padding-left: 0;

    .header-left {
      float: left;
      height: 100%;
      width: 60px;
      font-size: 20px;
      text-align: center;
    }

    .header-right {
      float: right;
      height: 100%;
      width: 160px;
      text-align: center;
    }

    .header-left:hover,
    .header-right:hover {
      background: #f9f9f9;
    }

  }

  .page-container {
    padding: 50px;
  }
}
</style>