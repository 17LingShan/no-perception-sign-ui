import { cloneDeep } from 'lodash'
import { defineStore } from 'pinia'
import { constantRouterMap, asyncTeacherMap, asyncStudentMap } from '@/config/router.config'

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
  actions: {
    GenerateRoutes (userType) {
      return new Promise(reslove => {
        console.log(userType)
        const routerMap = cloneDeep(userType === 'student' ? asyncStudentMap : asyncTeacherMap)
        const accessedRouters = filterAsyncRouter(routerMap)
        this.addRouters = accessedRouters
        this.routers = constantRouterMap.concat(routerMap)
        reslove()
      })
    }
  }
})