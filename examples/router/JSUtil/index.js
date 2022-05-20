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
    },

    {
      path: 'localStorage',
      name: 'ZDemoLocalStorage',
      meta: {
        key: 'localStorage',
        pKey: 'plugins',
        realm: 'localStorage',
        title: 'LocalStorage 永久存储',
      },
      component: () => import('../../views/JSUtil/localStorage')
    },

    {
      path: 'sessionStorage',
      name: 'ZDemoSessionStorage',
      meta: {
        key: 'sessionStorage',
        pKey: 'plugins',
        realm: 'sessionStorage',
        title: 'SessionStorage 临时存储',
      },
      component: () => import('../../views/JSUtil/sessionStorage')
    },

    {
      path: 'indexedDB',
      name: 'ZDemoIndexedDB',
      meta: {
        key: 'indexedDB',
        pKey: 'plugins',
        realm: 'indexedDB',
        title: 'IndexedDB 浏览器数据库',
      },
      component: () => import('../../views/JSUtil/indexedDB')
    }
  ]
}

export { JSUtilRoutes }
export default JSUtilRoutes