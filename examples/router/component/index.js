const ComponentRoutes = {
  path: '/components',
  name: 'ZDemoComponents',
  meta: {
    key: 'components',
    title: '组件',
  },
  component: () => import('../../views/Components'),
  children: [
    {
      path: '/components',
      redirect: () => 'button'
    },

    {
      path: 'autocomplete',
      name: 'ZDemoAutocomplete',
      meta: {
        key: 'autocomplete',
        nodeKey: 'components',
        realm: 'autocomplete',
        title: 'Autocomplete 按钮',
      },
      component: () => import('../../views/Components/Autocomplete')
    },

    {
      path: 'button',
      name: 'ZDemoButton',
      meta: {
        key: 'button',
        nodeKey: 'components',
        realm: 'button',
        title: 'Button 按钮',
      },
      component: () => import('../../views/Components/Button')
    },

    {
      path: 'button-toggle',
      name: 'ZDemoButtonToggle',
      meta: {
        key: 'buttonToggle',
        nodeKey: 'components',
        realm: 'buttonToggle',
        title: 'Button Groups 按钮组',
      },
      component: () => import('../../views/Components/ButtonToggle')
    },

    {
      path: 'checkboxs',
      name: 'ZDemoCheckboxs',
      meta: {
        key: 'checkboxs',
        nodeKey: 'components',
        realm: 'checkboxs',
        title: 'Checkboxs 多选框',
      },
      component: () => import('../../views/Components/Checkboxs')
    },

    {
      path: 'date-picker',
      name: 'ZDemoDatePicker',
      meta: {
        key: 'datePicker',
        nodeKey: 'components',
        realm: 'datePicker',
        title: 'Date Picker 日期选择器',
      },
      component: () => import('../../views/Components/DatePicker')
    },

    {
      path: 'drawer',
      name: 'ZDemoDrawer',
      meta: {
        key: 'drawer',
        nodeKey: 'components',
        realm: 'drawer',
        title: 'Drawer 导航抽屉',
      },
      component: () => import('../../views/Components/Drawer')
    },

    {
      path: 'dropdown',
      name: 'ZDemoDropdown',
      meta: {
        key: 'dropdown',
        nodeKey: 'components',
        realm: 'dropdown',
        title: 'Dropdown 下拉菜单',
      },
      component: () => import('../../views/Components/Dropdown')
    },

    {
      path: 'pagination',
      name: 'ZDemoPagination',
      meta: {
        key: 'pagination',
        nodeKey: 'components',
        realm: 'pagination',
        title: 'Pagination 分页',
      },
      component: () => import('../../views/Components/Pagination')
    },

    {
      path: 'radios',
      name: 'ZDemoRadios',
      meta: {
        key: 'radios',
        nodeKey: 'components',
        realm: 'radios',
        title: 'Radios 单选框',
      },
      component: () => import('../../views/Components/Radios')
    },

    {
      path: 'select',
      name: 'ZDemoSelect',
      meta: {
        key: 'select',
        nodeKey: 'components',
        realm: 'select',
        title: 'Select 选择器',
      },
      component: () => import('../../views/Components/Select')
    },

    {
      path: 'switch',
      name: 'ZDemoSwitch',
      meta: {
        key: 'switch',
        nodeKey: 'components',
        realm: 'switch',
        title: 'Switch 开关',
      },
      component: () => import('../../views/Components/Switch')
    },

    {
      path: 'textarea',
      name: 'ZDemoTextarea',
      meta: {
        key: 'textarea',
        nodeKey: 'components',
        realm: 'textarea',
        title: 'Teaxarea 多行文本框',
      },
      component: () => import('../../views/Components/Textarea')
    },

    {
      path: 'input',
      name: 'ZDemoInput',
      meta: {
        key: 'input',
        nodeKey: 'components',
        realm: 'input',
        title: 'Input 输入框',
      },
      component: () => import('../../views/Components/Input')
    }
  ]
}

export { ComponentRoutes }
export default ComponentRoutes