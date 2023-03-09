import { toRaw } from "vue";
import { cloneDeep } from "lodash";
import { defineStore } from "pinia";
import { constantRouterMap, asyncRouterMap } from "@/config/router.config";

function filterAsyncRouter(routerMap, role) {
  const accessedRouters = routerMap.filter((route) => {
    if (route.meta.role === role || route.path === "/") {
      if (route.children) {
        route.children = filterAsyncRouter(route.children, role);
      }
      return true;
    }
    return false;
  });
  return accessedRouters;
}

export const permissionStore = defineStore("permission", {
  state: () => {
    return {
      routers: constantRouterMap,
      addRouters: [],
    };
  },
  actions: {
    GenerateRoutes(userType) {
      return new Promise((resolve) => {
        const routerMap = cloneDeep(toRaw(asyncRouterMap));
        const accessedRouters = filterAsyncRouter(routerMap, userType);
        this.addRouters = accessedRouters;
        this.routers = constantRouterMap.concat(routerMap);
        resolve();
      });
    },
  },
});
