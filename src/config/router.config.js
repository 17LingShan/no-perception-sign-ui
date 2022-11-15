// import { h } from 'vue'
import { UserLayout, BasicLayout } from '@/layouts'


// const RouteView = {
//   name: 'RouteView',
//   render: h => h('router-view')
// }

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'index', role: 'index' },
    redirect: '/attendance',
    children: [
      {
        path: '/attendance',
        name: 'attendance',
        component: () => import('@/views/student/Attendance'),
        meta: { title: '考勤', role: 'student', icon: 'CalendarOutlined' }
      },
      {
        path: '/modify',
        name: 'modify',
        component: () => import('@/views/student/Modify'),
        meta: { title: '课程', role: 'student', icon: 'BookOutlined' }
      },
      {
        path: '/attendance',
        name: 'attendance',
        component: () => import('@/views/teacher/Attendance'),
        meta: { title: '考勤', role: 'teacher', icon: 'CalendarOutlined' }
      },
      {
        path: '/modify',
        name: 'modify',
        component: () => import('@/views/teacher/Modify'),
        meta: { title: '课程', role: 'teacher', icon: 'BookOutlined' }
      },
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