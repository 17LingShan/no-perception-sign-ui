import { UserLayout } from '@/layouts'

export const asyncRouterMap = [
  {
    path: '/',
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/view/Home')
      }
    ]
  }
]

export const constantRouterMap = [
  {
    path: '/',
    component: UserLayout,
    redirect: '/user/login',
    children: [
      {
        path: '/user/login',
        name: 'login',
        component: () => import('@/view/user/Login')
      }
    ]
  }
]