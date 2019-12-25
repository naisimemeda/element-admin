import Layout from '@/layout/index'

const routes = {
  path: '/code',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/code/index'),
      name: 'code',
      meta: { title: '激活码', icon: 'dashboard', affix: true }
    }
  ]
}
export default routes
