<template>
  <a-layout>
    <a-layout-sider>
      <div class="logo">
        <h1>vue</h1>
      </div>
    </a-layout-sider>
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout-content>Content</a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { onMounted, reactive, ref, toRaw } from 'vue'
import { permissionStore } from '@/store/permission'
import defaultSettings from '@/config/defaultStyleSetting'

const piniaPermission = permissionStore()



onMounted(() => {

})

</script>

<style lang="scss" scoped>
.ant-layout {
  height: 100%;

  .logo {
    height: 64px;
    background: #001529;
  }

  .ant-layout-header {
    background: #ffff;
  }
}
</style>