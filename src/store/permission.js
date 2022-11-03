import storage from 'store'
import { defineStore } from 'pinia'
import { constantRouterMap, asyncRouterMap } from '@/config/router.config'

export const permissionStore = defineStore('permission', {
  state: () => {
    return {
      routers: constantRouterMap,
      addRouter: []
    }
  },
  actions: {
    GenerateRoutes (route) {
      return new Promise(reslove => {
        console.log(route)
      })
    }
  }
})