import { createRouter, createWebHistory } from "vue-router"
import { constantRouterMap, asyncRouterMap } from "@/config/router.config"

const router = createRouter({
  history: createWebHistory(),
  routes: constantRouterMap
})

router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  next()
})

export default router