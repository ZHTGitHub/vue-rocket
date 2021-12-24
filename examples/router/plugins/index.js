const PluginsRoutes = {
  path: '/plugins',
  name: 'ZDemoPlugins',
  meta: {
    key: 'plugins',
    title: '插件',
  },
  component: () => import('../../views/Plugins'),
  children: [
    {
      path: '/plugins',
      redirect: () => 'xml'
    },

    {
      path: 'xml',
      name: 'ZDemoXml',
      meta: {
        key: 'xml',
        pKey: 'plugins',
        realm: 'xml',
        title: '编辑 xml',
      },
      component: () => import('../../views/Plugins/Xml')
    }
  ]
}

export { PluginsRoutes }
export default PluginsRoutes