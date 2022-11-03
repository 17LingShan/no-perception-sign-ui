import storage from 'store'
import { defineStore } from 'pinia'
import { login, regiser } from '@/api/user'
import { TOKEN, USERID, USERNAME, USERTYPE } from './mutation-types'

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
          this.userType = loginInfo.loginType
          this.username = res.data.user_name
          this.userId = res.data.user_id
          this.token = res.data.token
          storage.set(USERTYPE, this.userType)
          storage.set(USERNAME, this.username)
          storage.set(USERID, this.userId)
          storage.set(TOKEN, this.token)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
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