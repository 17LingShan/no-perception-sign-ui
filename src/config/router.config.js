import { UserLayout, BasicLayout } from '@/layouts'


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
        children: [
          {
            path: '/dashboard/workspace',
            name: 'workspace',
            component: import('@/view/dashboard/Workspace')
          },
          {
            path: '/dashboard/dash_temp1',
            name: 'dash_temp1',
            children: [
              {
                path: '/dashboard'
              }
            ]
          }
        ]
      },
      {
        path: '/temp2',
        name: 'temp2',
        component: BasicLayout,
        children: [
          {
            path: '/temp2/temp2_1',
            name: 'temp2_1',
            component: import('@/view/dashboard/Workspace')
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