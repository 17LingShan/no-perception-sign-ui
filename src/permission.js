import router, { resetRouter } from '@/router'
import storage from 'store'
import { userStore } from '@/store/user'
import { permissionStore } from '@/store/permission'
import { TOKEN, USERID, USERNAME, USERTYPE } from '@/store/mutation-types'
import { map } from 'lodash'

const loginRoutePath = '/user/login'
const defaultRoutePath = '/index'

router.beforeEach((to, from, next) => {

  const piniaUser = userStore()
  const piniaPermisstion = permissionStore()

  if (to.path === loginRoutePath) {
    next()
  } else {
    if (storage.get(TOKEN)) {
      next()
    } else {
      next({ name: 'login' })
    }
  }
})
