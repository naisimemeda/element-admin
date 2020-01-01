import Layout from '@/layout/index'

const routes = [{
  path: '/code',
  component: Layout,
  meta: {title: '活动', icon: 'dashboard', affix: true},
  children: [
    {
      path: 'list/code',
      component: () => import('@/views/code/index'),
      meta: {title: '哈哈', icon: 'dashboard', noCache: true},
      children: [
        {
          path: '',
          component: () => import('@/views/code/Codelist'),
          hidden: true, // 不在侧边栏线上
          name: 'code',
          meta: {title: '激活码', icon: 'dashboard', breadcrumb: false},
          children: [
            {
              path: '',
              component: () => import('@/views/code/code/log'),
              hidden: true, // 不在侧边栏线上
              name: 'codeLog',
              meta: {title: '激活码', icon: 'dashboard', breadcrumb: false}
            }
          ]
        },
        {
          path: '/code/list/banner',
          component: () => import('@/views/code/Bannerlist'),
          hidden: true, // 不在侧边栏线上
          name: 'bannerList',
          meta: {title: '广告', icon: 'dashboard', breadcrumb: false}
        },
      ]
    }
  ]
},
{
  path: '/bus',
  component: Layout,
  meta: {title: 'bus练习', icon: 'dashboard', affix: true},
  children: [{
    path: 'index',
    component: () => import('@/views/bus/index'),
    name: 'busIndex',
    meta: {title: 'bus练习', icon: 'dashboard', noCache: true},
  }]
}
]
export default routes
