import { defineStore } from 'pinia'
import { login, regiser } from '@/api/user'

export const userStore = defineStore('user', {
  state: () => {
    return {
      username: null,
      studentId: null,
      token: null
    }
  },

  actions: {
    Login (loginInfo) {
      return new Promise((resolve, reject) => {
        login(loginInfo).then(res => {
          this.username = res.data.user_name
          this.token = res.data.token
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    Register (regiserInfo) {
      return new Promise((resolve, reject) => {
        regiser(regiserInfo).then((res) => {
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      })
    }
  }
})