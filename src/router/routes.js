import Layout from '@/layout/index'

const routes = {
  path: '/code',
  component: Layout,
  meta: { title: '活动', icon: 'dashboard', affix: true },
  children: [
    {
      path: 'index/list',
      component: () => import('@/views/code/index'),
      name: 'code',
      meta: { title: '活动', icon: 'dashboard', noCache: true },
      children: [
        {
          path: '',
          component: () => import('@/views/code/Codelist'),
          hidden: true, // 不在侧边栏线上
          name: 'codeList',
          meta: { title: '激活码', icon: 'dashboard', breadcrumb: false }
        },
        {
          path: '/code/index/banner',
          component: () => import('@/views/code/Bannerlist'),
          hidden: true, // 不在侧边栏线上
          name: 'bannerList',
          meta: { title: '广告', icon: 'dashboard', breadcrumb: false }
        },
      ]
    }
  ]
}
export default routes
