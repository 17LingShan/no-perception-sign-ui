import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ProLayout from '@ant-design-vue/pro-layout'
import App from './App.vue'
import router from '@/router'
import Antd from 'ant-design-vue'
import './permission' //路由守卫
import 'ant-design-vue/dist/antd.css'
import '@/styles/global.scss'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(Antd)
app.use(pinia)
app.use(ProLayout)
app.mount('#app')
