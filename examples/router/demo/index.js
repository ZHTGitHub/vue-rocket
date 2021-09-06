const DemoRoutes = {
  path: '/demo',
  name: 'ZDemo',
  component: () => import('../../views/demo'),
  children: [
    {
      path: '/demo',
      redirect: () => 'home'
    },

    {
      path: 'home',
      name: 'ZHome',
      meta: {
        title: '首页',
        unique: 'home'
      },
      component: () => import('../../views/demo/Home')
    },

    {
      path: 'components',
      name: 'ZDemoComponents',
      meta: {
        title: '组件',
        unique: 'components'
      },
      component: () => import('../../views/demo/Components'),
      children: [
        {
          path: '/demo/components',
          redirect: () => 'input'
        },
        {
          path: 'input',
          name: 'ZDemoInput',
          meta: {
            title: '输入框',
            unique: 'input',
            parent: 'components'
          },
          component: () => import('../../views/demo/Components/Input')
        },
        {
          path: 'select',
          name: 'ZDemoSelect',
          meta: {
            title: '选择器',
            unique: 'select',
            parent: 'components'
          },
          component: () => import('../../views/demo/Components/Select')
        },
        {
          path: 'checkboxs',
          name: 'ZDemoCheckboxs',
          meta: {
            title: '多选框',
            unique: 'checkboxs',
            parent: 'components'
          },
          component: () => import('../../views/demo/Components/Checkboxs')
        },
        {
          path: 'radios',
          name: 'ZDemoRadios',
          meta: {
            title: '单选框',
            unique: 'radios',
            parent: 'components'
          },
          component: () => import('../../views/demo/Components/Radios')
        },
        {
          path: 'switch',
          name: 'ZDemoSwitch',
          meta: {
            title: '开关',
            unique: 'switch',
            parent: 'components'
          },
          component: () => import('../../views/demo/Components/Switch')
        },
        {
          path: 'button',
          name: 'ZDemoButton',
          meta: {
            title: '按钮',
            unique: 'button',
            parent: 'components'
          },
          component: () => import('../../views/demo/Components/Button')
        },
        {
          path: 'pagination',
          name: 'ZDemoPagination',
          meta: {
            title: '分页',
            unique: 'pagination',
            parent: 'components'
          },
          component: () => import('../../views/demo/Components/Pagination')
        },
        {
          path: 'drawer',
          name: 'ZDemoDrawer',
          meta: {
            title: '导航抽屉',
            unique: 'drawer',
            parent: 'components'
          },
          component: () => import('../../views/demo/Components/Drawer')
        }
      ]
    },
    {
      path: 'form',
      name: 'ZDemoForm',
      meta: {
        title: '表单',
        unique: 'form'
      },
      component: () => import('../../views/demo/Form')
    },
    {
      path: 'table',
      name: 'ZDemoTable',
      meta: {
        title: '表格',
        unique: 'table'
      },
      component: () => import('../../views/demo/Table')
    },
    {
      path: 'style',
      name: 'ZDemoStyle',
      meta: {
        title: '样式',
        unique: 'style'
      },
      component: () => import('../../views/demo/Style')
    }
  ]
}

export { DemoRoutes }
export default DemoRoutes