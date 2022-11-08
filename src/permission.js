import router, { resetRouter } from '@/router'
import storage from 'store'
import { toRaw } from 'vue'
import { userStore } from '@/store/user'
import { permissionStore } from '@/store/permission'
import { TOKEN, USERID, USERNAME, USERTYPE, USERINFO } from '@/store/types'

const loginRoutePath = '/user/login'
const defaultRoutePath = '/index'

router.beforeEach((to, from, next) => {
  console.log(from)
  console.log(to)

  const piniaUser = userStore()
  const piniaPermisstion = permissionStore()

  if (storage.get(TOKEN)) {
    if (to.path === loginRoutePath) {
      next()
    } else {
      if (!piniaUser.userId || !piniaUser.username || !piniaUser.userType) {
        piniaUser.GetInfo().then(async () => {
          resetRouter()

          await piniaPermisstion.GenerateRoutes().then(() => {
            toRaw(piniaPermisstion.addRouters).forEach((item) => {
              router.addRoute(item)
            })

            console.log(router.getRoutes())
            next({ ...to })
          })
        })
      } else {
        next()
      }
    }
  } else {
    if (to.path === loginRoutePath) {
      next()
    } else {
      next({ path: loginRoutePath })
    }
  }

  // if (to.path === loginRoutePath) {
  //   next()
  // } else {
  //   if (storage.get(TOKEN)) {
  //     if (!piniaUser.userId || !piniaUser.username || !piniaUser.userType) {
  //       piniaUser.GetInfo().then(() => {
  //         resetRouter()
  //         piniaPermisstion.GenerateRoutes().then(() => {
  //           toRaw(piniaPermisstion.addRouters).forEach((item) => {
  //             router.addRoute(item)
  //           })
  //           console.log(router.getRoutes())
  //         })
  //       })
  //     }
  //     next()
  //   } else {
  //     next({ name: 'login' })
  //   }
  // }
})
