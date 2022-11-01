import storage from 'store'
import { createRouter, createWebHistory } from 'vue-router'
import { constantRouterMap, asyncRouterMap } from '@/config/router.config'
import { TOKEN } from '@/store/mutation-types'

const router = createRouter({
  history: createWebHistory(),
  routes: constantRouterMap
})

//导航守卫
const loginRoutePath = '/user/login'
const defaultRoutePath = '/home'

router.beforeEach((to, from, next) => {
  const token = storage.get(TOKEN)
  console.log(token)
  if (to.path !== loginRoutePath && token === null) {
    next({ name: 'login' })
  }
  next()
})

export default router