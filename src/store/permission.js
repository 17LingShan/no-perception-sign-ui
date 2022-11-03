import storage from 'store'
import { cloneDeep } from 'lodash'
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
    GenerateRoutes (data) {
      return new Promise(reslove => {
        console.log(data)
      })
    }
  }
})