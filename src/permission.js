import router, { resetRouter } from '@/router'
import storage from 'store'
import { toRaw } from 'vue'
import { userStore } from '@/store/user'
import { permissionStore } from '@/store/permission'
import { TOKEN } from '@/store/types'

const accessablePath = ['/user/login', '/user/register']

router.beforeEach((to, from, next) => {
  const piniaUser = userStore()
  const piniaPermisstion = permissionStore()

  if (storage.get(TOKEN)) {
    if (accessablePath.includes(to.path)) {
      next()
    } else {
      if (!piniaUser.userId || !piniaUser.username || !piniaUser.userType) {
        piniaUser.GetInfo().then(async () => {
          resetRouter()
          await piniaPermisstion.GenerateRoutes(piniaUser.userType).then(() => {
            toRaw(piniaPermisstion.addRouters).forEach((item) => {
              router.addRoute(item)
            })
            next({ ...to, replace: true })
          })
        })
      } else {
        next()
      }
    }
  } else {
    if (accessablePath.includes(to.path)) {
      next()
    } else {
      next({ path: accessablePath[0] })
    }
  }

})
