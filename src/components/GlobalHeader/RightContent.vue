<template>
  <a-dropdown>
    <span>
      <a-avatar size="small" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" />
      <span>{{ props.username }}</span>
    </span>

    <template #overlay>
      <a-menu>
        <a-menu-item @click="$emit('logout')">
          <a rel="noopener noreferrer" href="#">
            <LogoutOutlined />
            Logout
          </a>
        </a-menu-item>

      </a-menu>
    </template>
  </a-dropdown>
</template>

<script setup>
import { LogoutOutlined } from '@ant-design/icons-vue'

const props = defineProps({
  username: String
})


</script>

<style lang="scss" scoped>
.ant-avatar+span {
  margin-left: 20px;
}
</style>