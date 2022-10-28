import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '@/styles/global.scss'

const app = createApp(App)
app.use(router)
app.use(Antd)
// app.use(VueAxios, axios)
app.mount('#app')
