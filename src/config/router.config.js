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
    redirect: '/daily/attendance',
    children: [
      {
        path: '/daily',
        name: 'daily',
        // component: RouteView,
        meta: { title: '日常', keepAlive: true, icon: 'CalendarOutlined', role: 'student' },
        children: [
          {
            path: '/daily/attendance',
            name: 'attendance',
            component: () => import('@/views/student/Attendance'),
            meta: { title: '考勤', role: 'student' }
          }
        ]
      },
      {
        path: '/course',
        name: 'course',
        // component: RouteView,
        meta: { title: '课程', keepAlive: true, icon: 'BookOutlined', role: 'student' },
        children: [
          {
            path: '/course/modify',
            name: 'modify',
            component: () => import('@/views/student/Modify'),
            meta: { title: '查看课程', role: 'student' }
          }
        ]
      },
      {
        path: '/daily',
        name: 'daily',
        // component: RouteView,
        meta: { title: '日常', keepAlive: true, icon: 'CalendarOutlined', role: 'teacher' },
        children: [
          {
            path: '/daily/attendance',
            name: 'attendance',
            component: () => import('@/views/teacher/Attendance'),
            meta: { title: '考勤', role: 'teacher' }
          }
        ]
      },
      {
        path: '/course',
        name: 'course',
        // component: RouteView,
        meta: { title: '课程', keepAlive: true, icon: 'BookOutlined', role: 'teacher' },
        children: [
          {
            path: '/course/modify',
            name: 'modify',
            component: () => import('@/views/teacher/Modify'),
            meta: { title: '查看课程', role: 'teacher' }
          }
        ]
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