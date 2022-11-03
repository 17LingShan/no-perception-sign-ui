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
    redirect: '/dashboard/workplace',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: RouteView,
        meta: { title: 'dashboard' },
        children: [
          {
            path: '/dashboard/workspace',
            name: 'workspace',
            component: () => import('@/view/dashboard/Workspace')
          },
          {
            path: '/dashboard/dash_temp1',
            name: 'dash_temp1',
            component: () => import('@/view/dashboard/Workspace')
          }
        ]
      },
      {
        path: '/temp2',
        name: 'temp2',
        component: RouteView,
        children: [
          {
            path: '/temp2/temp2_1',
            name: 'temp2_1',
            component: () => import('@/view/dashboard/Workspace')
          }
        ]
      }
    ]
  }
]

export const constantRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout
  },
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    children: [
      {
        path: '/user/login',
        name: 'login',
        component: () => import('@/view/user/Login')
      },
      {
        path: '/user/register',
        name: 'register',
        component: () => import('@/view/user/Register')
      }
    ]
  }
]