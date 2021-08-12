const DemoRoutes = {
  path: '/demo',
  name: 'ZDemo',
  component: () => import('@/views/demo'),
  children: [
    {
      path: '/demo',
      redirect: () => 'form'
    },
    {
      path: 'form',
      name: 'ZDemoForm',
      component: () => import('@/views/demo/Form')
    },
    {
      path: 'table',
      name: 'ZDemoTable',
      component: () => import('@/views/demo/Table')
    }
  ]
}

export { DemoRoutes }
export default DemoRoutes