const DemoRoutes = {
  path: '/demo',
  name: 'ZDemo',
  component: () => import('../../../examples'),
  children: [
    {
      path: '/demo',
      redirect: () => 'components'
    },
    {
      path: 'components',
      name: 'ZDemoComponents',
      component: () => import('../../../examples/Components'),
      children: [
        {
          path: '/demo/components',
          redirect: () => 'input'
        },
        {
          path: 'input',
          name: 'ZDemoInput',
          component: () => import('../../../examples/Components/Input')
        },
        {
          path: 'select',
          name: 'ZDemoSelect',
          component: () => import('../../../examples/Components/Select')
        },
        {
          path: 'checkboxs',
          name: 'ZDemoCheckboxs',
          component: () => import('../../../examples/Components/Checkboxs')
        },
        {
          path: 'radios',
          name: 'ZDemoRadios',
          component: () => import('../../../examples/Components/Radios')
        },
        {
          path: 'switch',
          name: 'ZDemoSwitch',
          component: () => import('../../../examples/Components/Switch')
        },
        {
          path: 'button',
          name: 'ZDemoButton',
          component: () => import('../../../examples/Components/Button')
        },
        {
          path: 'pagination',
          name: 'ZDemoPagination',
          component: () => import('../../../examples/Components/Pagination')
        }
      ]
    },
    {
      path: 'form',
      name: 'ZDemoForm',
      component: () => import('../../../examples/Form')
    },
    {
      path: 'table',
      name: 'ZDemoTable',
      component: () => import('../../../examples/Table')
    },
    {
      path: 'style',
      name: 'ZDemoStyle',
      component: () => import('../../../examples/Style')
    }
  ]
}

export { DemoRoutes }
export default DemoRoutes