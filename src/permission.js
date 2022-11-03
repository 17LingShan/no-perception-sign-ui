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
  // const storageArr = new Map()
  // storage.each((value, key) => {
  //   storageArr.set(key, value)
  // })
  // console.log(storageArr);
  // console.log('路由守卫');
  if (storage.get(TOKEN)) {
    if (to.path === loginRoutePath) {
      next()
    } else {
      if (!storage.get(USERID) || !storage.get(USERNAME) || !storage.get(USERTYPE)) {
        // 如果没有用户信息
        next({ path: loginRoutePath })
      } else {

        next()
      }
    }
  }
  next()
})
