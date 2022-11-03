import storage from 'store'
import { createRouter, createWebHistory } from 'vue-router'
import { constantRouterMap } from '@/config/router.config'
import { TOKEN } from '@/store/mutation-types'

const router = createRouter({
  history: createWebHistory(),
  routes: constantRouterMap
})

export function resetRouter () {
  console.log('resetRouter');
  const newRouter = createRouter({
    history: createWebHistory(),
    routes: constantRouterMap
  })
  router.matcher = newRouter.matcher
}

export default router