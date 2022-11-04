import storage from 'store'
import { defineStore } from 'pinia'
import { login, regiser } from '@/api/user'
import { TOKEN, USERID, USERNAME, USERTYPE, USERINFO } from './types'

export const userStore = defineStore('user', {
  state: () => {
    return {
      userType: null,
      username: null,
      userId: null,
      token: null
    }
  },

  actions: {
    Login (loginInfo) {
      return new Promise((resolve, reject) => {
        login(loginInfo).then(res => {

          this.token = res.data.token
          const userInfo = JSON.stringify({
            [USERID]: res.data.user_id,
            [USERNAME]: res.data.user_name,
            [USERTYPE]: loginInfo.loginType
          })
          storage.set(USERINFO, userInfo)
          storage.set(TOKEN, this.token)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    GetInfo () {
      return new Promise(resolve => {
        const userInfo = JSON.parse(storage.get(USERINFO))
        // console.log(userInfo)
        this.userType = userInfo.loginType
        this.username = userInfo.username
        this.userId = userInfo.userId
        resolve()
      })
    },
    Register (regiserInfo) {
      return new Promise((resolve, reject) => {
        regiser(regiserInfo).then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    LoginOut () {
      return new Promise((resolve, reject) => {
        this.userType = null
        this.username = null
        this.userId = null
        this.token = null
        resolve('loginOut')
      })
    }
  }
})