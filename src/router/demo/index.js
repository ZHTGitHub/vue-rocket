const DemoRoutes = {
  path: '/demo',
  name: 'ZDemo',
  component: () => import('@/views/demo'),
  children: [
    {
      path: '/demo',
      redirect: () => 'components'
    },
    {
      path: 'components',
      name: 'ZDemoComponents',
      component: () => import('@/views/demo/Components'),
      children: [
        {
          path: '/demo/components',
          redirect: () => 'input'
        },
        {
          path: 'input',
          name: 'ZDemoInput',
          component: () => import('@/views/demo/Components/Input')
        },
        {
          path: 'select',
          name: 'ZDemoSelect',
          component: () => import('@/views/demo/Components/Select')
        },
        {
          path: 'checkboxs',
          name: 'ZDemoCheckboxs',
          component: () => import('@/views/demo/Components/Checkboxs')
        },
        {
          path: 'radios',
          name: 'ZDemoRadios',
          component: () => import('@/views/demo/Components/Radios')
        },
        {
          path: 'switch',
          name: 'ZDemoSwitch',
          component: () => import('@/views/demo/Components/Switch')
        },
        {
          path: 'button',
          name: 'ZDemoButton',
          component: () => import('@/views/demo/Components/Button')
        },
        {
          path: 'pagination',
          name: 'ZDemoPagination',
          component: () => import('@/views/demo/Components/Pagination')
        }
      ]
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
    },
    {
      path: 'style',
      name: 'ZDemoStyle',
      component: () => import('@/views/demo/Style')
    }
  ]
}

export { DemoRoutes }
export default DemoRoutes