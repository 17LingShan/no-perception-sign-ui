import { UserLayout, BasicLayout } from '@/layouts'


const RouteView = {
  name: 'RouteView',
  render: h => h('router-view')
}

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'first' },
    redirect: '/dashboard/workplace',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: RouteView,
        meta: { title: 'dashboard', keepAlive: true },
        children: [
          {
            path: 'workplace',
            name: 'workplace',
            component: () => import('@/views/dashboard/workplace'),
            meta: { title: 'workplace' }
          }
        ]
      }
    ]
  }
]

export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/user/login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/views/user/legister')
      }
    ]
  }
]