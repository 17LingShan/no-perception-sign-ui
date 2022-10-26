const asyncRouterMap = [
  {
    path: '/',
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/components/Home')
      }
    ]
  }
]

export default asyncRouterMap