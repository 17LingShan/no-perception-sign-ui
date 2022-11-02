import storage from 'store'
import { createRouter, createWebHistory } from 'vue-router'
import { constantRouterMap, asyncRouterMap } from '@/config/router.config'
import { TOKEN } from '@/store/mutation-types'

const router = createRouter({
  history: createWebHistory(),
  routes: constantRouterMap
})

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router