import { login } from '@/api/user'
import { TOKEN } from "../mutation-types"
const user = {
  state: {
    token: '',
    username: ''
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, username) => {
      state.username = username
    }
  },
  actions: {
    Login ({ commit }, loginInfo) {
      return new Promise((resolve, reject) => {
        login(loginInfo).then((res) => {
          commit('SET_NAME', res.data.user_name)
          commit('SET_TOKEN', res.data.token)
          window.localStorage.setItem('token', res.data.token)
          resolve(res)
        }).catch((err) => {
          reject()
        })
      })
    }
  }
}

export default user