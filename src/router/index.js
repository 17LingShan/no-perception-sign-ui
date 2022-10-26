import { createRouter, createWebHistory } from "vue-router"
import asyncRouterMap from "@/config/router.config"

const router = createRouter({
  history: createWebHistory(),
  routes: asyncRouterMap
})

export default router