<template>
  <a-layout>
    <a-layout-sider>
      <div class="logo">
        <h1>vue</h1>
      </div>
      <a-menu mode="inline">
        <a-sub-menu v-for="item in layout.menus" :key="item.name">
          <template #title>
            {{ item.name }}
          </template>
          <a-menu-item v-for="kid_item in item.children" :key="kid_item.name">
            {{ kid_item.name }}
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout-content>

      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { onMounted, reactive, toRaw } from 'vue'
import { permissionStore } from '@/store/permission'
import defaultSettings from '@/config/defaultStyleSetting'

const piniaPermission = permissionStore()

const layout = reactive({
  menus: null
})

onMounted(() => {
  const routes = toRaw(piniaPermission.addRouters.find(item => item.path === '/'))
  console.log(routes)
  layout.menus = (routes && routes.children) || []
})

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
}
</style>