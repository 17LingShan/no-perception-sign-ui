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