import { createRouter, createWebHistory } from 'vue-router'
import { constantRouterMap } from '@/config/router.config'

let router = createRouter({
  history: createWebHistory(),
  routes: constantRouterMap
})

export function resetRouter () {
  const newRouter = createRouter({
    history: createWebHistory(),
    routes: constantRouterMap
  })
  router = newRouter
}

export default router