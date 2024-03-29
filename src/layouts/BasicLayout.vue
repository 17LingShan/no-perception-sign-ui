<template>
  <a-layout>
    <a-layout-sider :collapsed="layout.collapsed" width="15%">
      <div class="logo">
        <h1>vue</h1>
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" mode="inline" theme="dark">
        <a-menu-item v-for="item in layout.menus" :key="item.name" style="color: #fff">
          <template #icon>
            <component :is="$antIcons[item.meta.icon]" />
          </template>
          <router-link :to="item.path">
            {{ item.meta.title }}
          </router-link>
        </a-menu-item>
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
        <div class="developer-permission" v-if="isDeveloper">
          <a-tag :color="hasPermission.flag ? 'green' : 'red'">{{ hasPermission.text }}</a-tag>
        </div>
      </a-layout-header>
      <a-layout-content>
        <a-page-header :title="route.meta.title" style="background-color: #fff; padding: 24px" />
        <div class="page-container">
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { onMounted, reactive, ref, computed, toRaw } from "vue";
import { userStore } from "@/store/user";
import { permissionStore } from "@/store/permission";
import { useRouter, useRoute } from "vue-router";
import { message } from "ant-design-vue";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
import RightContent from "@/components/GlobalHeader/RightContent";
import { queryPermission } from "@/api/developer";
import { bool } from "vue-types";

const piniaUser = userStore();
const piniaPermission = permissionStore();
const router = useRouter();
const route = useRoute();

const isDeveloper = ref(false);
const hasPermission = reactive({
  text: "",
  flag: false,
});
const layout = reactive({
  menus: null,
  collapsed: false,
});

const selectedKeys = computed(() => [piniaPermission.nowPage]);

onMounted(() => {
  const routes = toRaw(piniaPermission.addRouters.find((item) => item.path === "/"));
  layout.menus = (routes && routes.children) || [];

  if (piniaUser.userType === "developer") {
    checkPermission();
    isDeveloper.value = true;
  }
});

const changeCollapsed = () => {
  layout.collapsed = !layout.collapsed;
};

const checkPermission = async () => {
  await queryPermission().then((res) => {
    if (res.data.code === 200) {
      hasPermission.text = "您已取得开发权限";
      hasPermission.flag = true;
    } else {
      hasPermission.text = "您未取得开发权限";
    }
  });
};

const logout = () => {
  piniaUser.Logout().then(() => {
    message.success({ content: "退出登录！" });
    router.push({ name: "login" });
  });
};
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

    .developer-permission {
      float: right;
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
