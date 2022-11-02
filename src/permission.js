import router, { resetRouter } from '@/router'
import storage from 'store'
import { userStore } from '@/store/user'
import { TOKEN } from '@/store/mutation-types'

const loginRoutePath = '/user/login'
const defaultRoutePath = '/index'

router.beforeEach((to, from, next) => {
  const piniaUser = userStore()

  const token = storage.get(TOKEN)
  if (token) {
    if (to.path === loginRoutePath) {
      next()
    } else {
      if (!piniaUser.userType || !piniaUser.username || !piniaUser.userId) {
        // 如果没有用户信息
        console.log('无用户信息！');
        next()
      }
    }
  }
  next()
})
