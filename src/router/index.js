import { createRouter, createWebHashHistory } from "vue-router"


const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: () => import('../components/Home')
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})