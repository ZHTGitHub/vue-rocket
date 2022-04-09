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
        title: 'Autocomplete 自动补全',
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
      path: 'buttonToggle',
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
      path: 'checkbox',
      name: 'ZDemoCheckbox',
      meta: {
        key: 'checkbox',
        pKey: 'components',
        realm: 'checkbox',
        title: 'Checkbox 复选框',
      },
      component: () => import('../../views/Components/Checkbox')
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
      path: 'datePicker',
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
      path: 'drawImage',
      name: 'ZDemoDrawImage',
      meta: {
        key: 'drawImage',
        pKey: 'components',
        realm: 'drawImage',
        title: 'Draw image 绘图',
      },
      component: () => import('../../views/Components/DrawImage')
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
      path: 'typography',
      name: 'ZDemoTypography',
      meta: {
        key: 'typography',
        pKey: 'components',
        realm: 'typography',
        title: 'Typography 排版',
      },
      component: () => import('../../views/Components/Typography')
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
      path: 'textField',
      name: 'ZDemoTextField',
      meta: {
        key: 'textField',
        pKey: 'components',
        realm: 'textField',
        title: 'TextField 输入框',
      },
      component: () => import('../../views/Components/TextField')
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