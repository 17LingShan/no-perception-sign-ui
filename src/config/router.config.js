// import { h } from 'vue'
import { UserLayout, BasicLayout } from '@/layouts'


// const RouteView = {
//   name: 'RouteView',
//   render: h => h('router-view')
// }

export const asyncTeacherMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'first' },
    redirect: '/teacher/attendance',
    children: [
      {
        path: '/teacher',
        name: 'teacher',
        // component: RouteView,
        meta: { title: '日常', keepAlive: true },
        children: [
          {
            path: '/teacher/attendance',
            name: 'attendance',
            component: () => import('@/views/teacher/Attendance'),
            meta: { title: '考勤' }
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
        path: '/student',
        name: 'student',
        // component: RouteView,
        redirect: '/student/attendance',
        meta: { title: '日常', keepAlive: true, icon: 'DashboardOutlined' },
        children: [
          {
            path: '/student/attendance',
            name: 'attendance',
            component: () => import('@/views/student/Attendance'),
            meta: { title: '考勤' }
          }
        ]
      },
      {
        path: '/course',
        name: 'course',
        // component: RouteView,
        meta: { title: '课程', keepAlive: true, icon: 'MenuUnfoldOutlined' },
        children: [
          {
            path: '/course/modify',
            name: 'modify',
            component: () => import('@/views/student/Modify'),
            meta: { title: '查看课程' }
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