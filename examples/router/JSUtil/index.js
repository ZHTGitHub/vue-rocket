const JSUtilRoutes = {
  path: '/JSUtil',
  name: 'ZDemoJSUtil',
  meta: {
    key: 'JSUtil',
    title: 'JSUtil',
  },
  component: () => import('../../views/JSUtil'),
  children: [
    {
      path: '/JSUtil',
      redirect: () => 'tools'
    },

    {
      path: 'tools',
      name: 'ZDemoTools',
      meta: {
        key: 'tools',
        pKey: 'plugins',
        realm: 'tools',
        title: '工具 tools',
      },
      component: () => import('../../views/JSUtil/tools')
    }
  ]
}

export { JSUtilRoutes }
export default JSUtilRoutes