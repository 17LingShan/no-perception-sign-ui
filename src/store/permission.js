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
    GenerateRoutes () {
      console.log()
      return new Promise(reslove => {
        console.log(asyncRouterMap)
        const routerMap = cloneDeep(asyncRouterMap)
        reslove()
      })
    }
  }
})