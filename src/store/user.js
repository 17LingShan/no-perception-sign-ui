import { defineStore } from 'pinia'

export const user = defineStore('user', {
  state: {
    username: null,
    token: null
  }
})