const ComponentRoutes = {
  path: '/components',
  name: 'ZDemoComponents',
  meta: {
    title: '组件',
    unique: 'components'
  },
  component: () => import('../../views/Components'),
  children: [
    {
      path: '/components',
      redirect: () => 'button'
    },

    {
      path: 'button',
      name: 'ZDemoButton',
      meta: {
        title: 'Button 按钮',
        unique: 'button',
        parent: 'components'
      },
      component: () => import('../../views/Components/Button')
    },

    {
      path: 'button-toggle',
      name: 'ZDemoButtonToggle',
      meta: {
        title: 'Button Groups 按钮组',
        unique: 'buttonToggle',
        parent: 'components'
      },
      component: () => import('../../views/Components/ButtonToggle')
    },

    {
      path: 'checkboxs',
      name: 'ZDemoCheckboxs',
      meta: {
        title: 'Checkboxs 多选框',
        unique: 'checkboxs',
        parent: 'components'
      },
      component: () => import('../../views/Components/Checkboxs')
    },

    {
      path: 'date-picker',
      name: 'ZDemoDatePicker',
      meta: {
        title: 'Date Picker 日期选择器',
        unique: 'datePicker',
        parent: 'components'
      },
      component: () => import('../../views/Components/DatePicker')
    },

    {
      path: 'drawer',
      name: 'ZDemoDrawer',
      meta: {
        title: 'Drawer 导航抽屉',
        unique: 'drawer',
        parent: 'components'
      },
      component: () => import('../../views/Components/Drawer')
    },

    {
      path: 'dropdown',
      name: 'ZDemoDropdown',
      meta: {
        title: 'Dropdown 下拉菜单',
        unique: 'dropdown',
        parent: 'components'
      },
      component: () => import('../../views/Components/Dropdown')
    },

    {
      path: 'pagination',
      name: 'ZDemoPagination',
      meta: {
        title: 'Pagination 分页',
        unique: 'pagination',
        parent: 'components'
      },
      component: () => import('../../views/Components/Pagination')
    },

    {
      path: 'radios',
      name: 'ZDemoRadios',
      meta: {
        title: 'Radios 单选框',
        unique: 'radios',
        parent: 'components'
      },
      component: () => import('../../views/Components/Radios')
    },

    {
      path: 'select',
      name: 'ZDemoSelect',
      meta: {
        title: 'Select 选择器',
        unique: 'select',
        parent: 'components'
      },
      component: () => import('../../views/Components/Select')
    },

    {
      path: 'switch',
      name: 'ZDemoSwitch',
      meta: {
        title: 'Switch 开关',
        unique: 'switch',
        parent: 'components'
      },
      component: () => import('../../views/Components/Switch')
    },

    {
      path: 'textarea',
      name: 'ZDemoTextarea',
      meta: {
        title: 'Teaxarea 多行文本框',
        unique: 'textarea',
        parent: 'components'
      },
      component: () => import('../../views/Components/Textarea')
    },

    {
      path: 'input',
      name: 'ZDemoInput',
      meta: {
        title: 'Input 输入框',
        unique: 'input',
        parent: 'components'
      },
      component: () => import('../../views/Components/Input')
    }
  ]
}

export { ComponentRoutes }
export default ComponentRoutes