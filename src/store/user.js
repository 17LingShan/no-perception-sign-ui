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
        }).catch(res => {
          reject(res)
        })
      })
    },
    Register (regiserOInfo) {
      return new Promise((resolve, reject) => {

      })
    }
  }
})