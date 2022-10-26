import { createRouter, createWebHistory } from "vue-router"
import { constantRouterMap, asyncRouterMap } from "@/config/router.config"

const router = createRouter({
  history: createWebHistory(),
  routes: constantRouterMap
})

export default router