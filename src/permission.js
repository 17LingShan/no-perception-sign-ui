import router, { resetRouter } from '@/router'
import storage from 'store'
import { userStore } from '@/store/user'
import { permissionStore } from '@/store/permission'
import { TOKEN, USERID, USERNAME, USERTYPE, USERINFO } from '@/store/types'

const loginRoutePath = '/user/login'
const defaultRoutePath = '/index'

router.beforeEach((to, from, next) => {

  const piniaUser = userStore()
  const piniaPermisstion = permissionStore()

  if (to.path === loginRoutePath) {
    next()
  } else {
    if (storage.get(TOKEN)) {
      if (!piniaUser.userId || !piniaUser.username || !piniaUser.userType) {
        piniaUser.GetInfo().then(() => {
          resetRouter()
          piniaPermisstion.GenerateRoutes().then(() => {
            piniaPermisstion.asyncRouters.forEach(item => {
              router.addRoute(item)
              console.log(router);
            })
          })
        })
      }
      next()
    } else {
      next({ name: 'login' })
    }
  }
})
