export const menus = [
  {
    pId: '-1',
    id: 'home',
    unique: 'home',
    icon: 'mdi-home',
    title: '首页',
    link: '/demo/home',
    leaf: false
  },

  {
    pId: '-1',
    id: 'form',
    unique: 'form',
    icon: 'mdi-form-select',
    title: '表单',
    link: '/demo/form',
    leaf: false
  },

  {
    pId: '-1',
    id: 'table',
    unique: 'table',
    icon: 'mdi-table',
    title: '表格',
    link: '/demo/table',
    leaf: false
  },

  {
    pId: '-1',
    id: 'style',
    unique: 'style',
    icon: 'mdi-language-css3',
    title: '样式',
    link: '/demo/style',
    leaf: false
  },

  {
    pId: '-1',
    id: 'components',
    unique: 'components',
    expanded: false,
    icon: 'mdi-view-dashboard',
    title: '组件',
    link: '/demo/components',
    leaf: true,
    children: [
      {
        pId: 'components',
        unique: 'input',
        icon: '',
        title: 'Input 输入框',
        link: '/demo/components/input'
      },

      {
        pId: 'components',
        unique: 'textarea',
        icon: '',
        title: 'Teaxarea 多行文本框',
        link: '/demo/components/textarea'
      },

      {
        pId: 'components',
        unique: 'select',
        icon: '',
        title: 'Select 选择器',
        link: '/demo/components/select'
      },

      {
        pId: 'components',
        unique: 'checkboxs',
        icon: '',
        title: 'Checkboxs 多选框',
        link: '/demo/components/checkboxs'
      },

      {
        pId: 'components',
        unique: 'radios',
        icon: '',
        title: 'Radios 单选框',
        link: '/demo/components/radios'
      },

      {
        pId: 'components',
        unique: 'switch',
        icon: '',
        title: 'Switch 开关',
        link: '/demo/components/switch'
      },

      {
        pId: 'components',
        unique: 'button',
        icon: '',
        title: 'Button 按钮',
        link: '/demo/components/button'
      },

      {
        pId: 'components',
        unique: 'pagination',
        icon: '',
        title: 'Pagination 分页',
        link: '/demo/components/pagination'
      },

      {
        pId: 'components',
        unique: 'drawer',
        icon: '',
        title: 'Drawer 导航抽屉',
        link: '/demo/components/drawer'
      }
    ]
  }
]