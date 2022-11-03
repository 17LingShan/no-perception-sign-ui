import router, { resetRouter } from '@/router'
import storage from 'store'
import { userStore } from '@/store/user'
import { TOKEN, USERID, USERNAME, USERTYPE } from '@/store/mutation-types'

const loginRoutePath = '/user/login'
const defaultRoutePath = '/index'

router.beforeEach((to, from, next) => {
  const piniaUser = userStore()
  console.log(piniaUser);
  const token = storage.get(TOKEN)
  const userId = storage.get(USERID)
  const username = storage.get(USERNAME)
  const userType = storage.get(USERTYPE)

  if (token) {
    if (to.path === loginRoutePath) {
      next()
    } else {
      if (!userId || !username || !userType) {
        // 如果没有用户信息
        next({ path: loginRoutePath })
      } else {
        next()
      }
    }
  }
  next()
})
