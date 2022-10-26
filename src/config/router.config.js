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
    name: 'login',
    component: UserLayout
  }
]