const JSUtilRoutes = {
  path: '/utils',
  name: 'ZDemoUtils',
  meta: {
    key: 'utils',
    title: 'utils',
  },
  component: () => import('../../views/JSUtil'),
  children: [
    {
      path: '/utils',
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