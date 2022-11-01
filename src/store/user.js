import { defineStore } from 'pinia'
import { login, regiser } from '@/api/user'
import { TOKEN } from './mutation-types'

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
          this.token = res.data.token
          window.localStorage.setItem(TOKEN, res.data.token)
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
    }
  }
})