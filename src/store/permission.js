import storage from 'store'
import { cloneDeep } from 'lodash'
import { defineStore } from 'pinia'
import { constantRouterMap, asyncRouterMap } from '@/config/router.config'

function filterAsyncRouter (routerMap) {
  const accessedRouters = routerMap.filter(route => {
    if (1) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

export const permissionStore = defineStore('permission', {
  state: () => {
    return {
      routers: constantRouterMap,
      addRouters: []
    }
  },
  getters: {
    asyncRouters (state) {
      return state.addRouters
    }
  },
  actions: {
    GenerateRoutes () {
      console.log()
      return new Promise(reslove => {
        const routerMap = cloneDeep(asyncRouterMap)
        const accessedRouters = filterAsyncRouter(routerMap)
        this.addRouters = accessedRouters
        this.routers = constantRouterMap.concat(routerMap)
        reslove()
      })
    }
  }
})