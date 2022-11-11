import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router'
import Antd from 'ant-design-vue'
import './permission' //路由守卫
import '@/styles/global.scss'
import 'ant-design-vue/dist/antd.css'
import * as antIcons from '@ant-design/icons-vue'

const app = createApp(App)
const pinia = createPinia()

//menu的动态icon设置
Object.keys(antIcons).forEach(key => {
  app.component(key, antIcons[key])
})
// 添加到全局
app.config.globalProperties.$antIcons = antIcons

app.use(router)
app.use(Antd)
app.use(pinia)
app.mount('#app')
