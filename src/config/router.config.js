import { UserLayout, BasicLayout } from '@/layouts'
import { h } from 'vue'


const RouteView = {
  name: 'RouteView',
  render: h => h('router-view')
}

export const asyncTeacherMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'first' },
    redirect: '/teacher/attendance',
    children: [
      {
        path: 'teacher',
        name: 'teacher',
        component: RouteView,
        meta: { title: 'dashboard', keepAlive: true },
        children: [
          {
            path: 'attendance',
            name: 'attendance',
            component: () => import('@/views/teacher/Attendance'),
            meta: { title: 'Attendance' }
          }
        ]
      }
    ]
  }
]


export const asyncStudentMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'first' },
    redirect: '/student/attendance',
    children: [
      {
        path: 'student',
        name: 'student',
        component: RouteView,
        meta: { title: 'dashboard', keepAlive: true, icon: 'DashboardOutlined' },
        children: [
          {
            path: 'attendance',
            name: 'attendance',
            component: () => import('@/views/student/Attendance'),
            meta: { title: 'Attendance' }
          }
        ]
      },
      {
        path: 'temp1',
        name: 'temp1',
        component: RouteView,
        meta: { title: 'temp1', keepAlive: true, icon: 'MenuUnfoldOutlined' },
        children: [
          {
            path: 'temp1-1',
            name: 'temp1-1',
            component: () => import('@/views/student/Attendance'),
            meta: { title: 'temp1-1' }
          },
          {
            path: 'temp1-2',
            name: 'temp1-2',
            component: () => import('@/views/student/Attendance'),
            meta: { title: 'temp1-2' }
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