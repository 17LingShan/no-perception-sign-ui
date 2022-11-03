import storage from 'store'
import { cloneDeep } from 'lodash'
import { defineStore } from 'pinia'
import { constantRouterMap, asyncRouterMap } from '@/config/router.config'


export const permissionStore = defineStore('permission', {
  state: () => {
    return {
      routers: constantRouterMap,
      addRouters: []
    }
  },
  actions: {
    GenerateRoutes (data) {
      console.log(data)
      return new Promise(reslove => {
        console.log(asyncRouterMap)
        const routerMap = cloneDeep(asyncRouterMap)
        const accessedRouters = filterAsyncRouter(routerMap)
        this.addRouters = accessedRouters
        this.routers = constantRouterMap.concat(accessedRouters)
        reslove()
      })
    }
  }
})