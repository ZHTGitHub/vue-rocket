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
        pKey: 'components',
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
        pKey: 'components',
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
        pKey: 'components',
        realm: 'buttonToggle',
        title: 'Button Groups 按钮组',
      },
      component: () => import('../../views/Components/ButtonToggle')
    },

    {
      path: 'calendar',
      name: 'ZDemoCalendar',
      meta: {
        key: 'calendar',
        pKey: 'components',
        realm: 'calendar',
        title: 'Calendar 日历',
      },
      component: () => import('../../views/Components/Calendar')
    },

    {
      path: 'checkboxs',
      name: 'ZDemoCheckboxs',
      meta: {
        key: 'checkboxs',
        pKey: 'components',
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
        pKey: 'components',
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
        pKey: 'components',
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
        pKey: 'components',
        realm: 'dropdown',
        title: 'Dropdown 下拉菜单',
      },
      component: () => import('../../views/Components/Dropdown')
    },

    {
      path: 'dynamicForm',
      name: 'ZDemoDynamicForm',
      meta: {
        key: 'dynamicForm',
        pKey: 'components',
        realm: 'dynamicForm',
        title: 'Dynamic Form 动态表单',
      },
      component: () => import('../../views/Components/DynamicForm')
    },

    {
      path: 'pagination',
      name: 'ZDemoPagination',
      meta: {
        key: 'pagination',
        pKey: 'components',
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
        pKey: 'components',
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
        pKey: 'components',
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
        pKey: 'components',
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
        pKey: 'components',
        realm: 'textarea',
        title: 'Teaxarea 多行文本框',
      },
      component: () => import('../../views/Components/Textarea')
    },

    {
      path: 'fileInput',
      name: 'ZDemoFileInput',
      meta: {
        key: 'fileInput',
        pKey: 'components',
        realm: 'fileInput',
        title: 'File Input 文件上传',
      },
      component: () => import('../../views/Components/FileInput')
    },

    {
      path: 'input',
      name: 'ZDemoInput',
      meta: {
        key: 'input',
        pKey: 'components',
        realm: 'input',
        title: 'Input 输入框',
      },
      component: () => import('../../views/Components/Input')
    },

    {
      path: 'upload',
      name: 'ZDemoUpload',
      meta: {
        key: 'upload',
        pKey: 'components',
        realm: 'upload',
        title: 'Upload 上传',
      },
      component: () => import('../../views/Components/Upload')
    }
  ]
}

export { ComponentRoutes }
export default ComponentRoutes