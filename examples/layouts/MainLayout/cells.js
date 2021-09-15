export const menus = [
  {
    pId: '-1',
    id: 'home',
    unique: 'home',
    icon: 'mdi-home',
    title: '首页',
    link: '/home',
    leaf: false
  },

  {
    pId: '-1',
    id: 'form',
    unique: 'form',
    icon: 'mdi-form-select',
    title: '表单',
    link: '/form',
    leaf: true,
    children: [
      {
        pId: 'form',
        unique: 'rules',
        icon: '',
        title: 'Rules 校验规则',
        link: '/form/rules'
      },

      {
        pId: 'form',
        unique: 'examples',
        icon: '',
        title: 'Examples 使用示例',
        link: '/form/examples'
      }
    ]
  },

  {
    pId: '-1',
    id: 'table',
    unique: 'table',
    icon: 'mdi-table',
    title: '表格',
    link: '/table',
    leaf: false
  },

  {
    pId: '-1',
    id: 'components',
    unique: 'components',
    expanded: false,
    icon: 'mdi-view-dashboard',
    title: '组件',
    link: '/components',
    leaf: true,
    children: [
      {
        pId: 'components',
        unique: 'button',
        icon: '',
        title: 'Button 按钮',
        link: '/components/button'
      },

      {
        pId: 'components',
        unique: 'buttonToggle',
        icon: '',
        title: 'Button Groups 按钮组',
        link: '/components/button-toggle'
      },

      {
        pId: 'components',
        unique: 'checkboxs',
        icon: '',
        title: 'Checkboxs 多选框',
        link: '/components/checkboxs'
      },

      {
        pId: 'components',
        unique: 'datePicker',
        icon: '',
        title: 'Date Picker 日期选择器',
        link: '/components/date-picker'
      },

      {
        pId: 'components',
        unique: 'drawer',
        icon: '',
        title: 'Drawer 导航抽屉',
        link: '/components/drawer'
      },

      {
        pId: 'components',
        unique: 'dropdown',
        icon: '',
        title: 'Dropdown 下拉菜单',
        link: '/components/dropdown'
      },

      {
        pId: 'components',
        unique: 'input',
        icon: '',
        title: 'Input 输入框',
        link: '/components/input'
      },

      {
        pId: 'components',
        unique: 'pagination',
        icon: '',
        title: 'Pagination 分页',
        link: '/components/pagination'
      },

      {
        pId: 'components',
        unique: 'radios',
        icon: '',
        title: 'Radios 单选框',
        link: '/components/radios'
      },

      {
        pId: 'components',
        unique: 'select',
        icon: '',
        title: 'Select 选择器',
        link: '/components/select'
      },

      {
        pId: 'components',
        unique: 'switch',
        icon: '',
        title: 'Switch 开关',
        link: '/components/switch'
      },

      {
        pId: 'components',
        unique: 'textarea',
        icon: '',
        title: 'Teaxarea 多行文本框',
        link: '/components/textarea'
      }
    ]
  },

  {
    pId: '-1',
    id: 'style',
    unique: 'style',
    icon: 'mdi-language-css3',
    title: '样式',
    link: '/style',
    leaf: true,
    children: [
      {
        pId: 'style',
        unique: 'text',
        icon: '',
        title: 'Text 文本',
        link: '/style/text'
      },

      {
        pId: 'style',
        unique: 'spacing',
        icon: '',
        title: 'Spacing 间距',
        link: '/style/spacing'
      },

      {
        pId: 'style',
        unique: 'flex',
        icon: '',
        title: 'Flex 弹性布局',
        link: '/style/flex'
      },

      {
        pId: 'style',
        unique: 'float',
        icon: '',
        title: 'Float 浮动',
        link: '/style/float'
      },

      {
        pId: 'style',
        unique: 'radius',
        icon: '',
        title: 'Border Radius 边框半径',
        link: '/style/radius'
      },

      {
        pId: 'style',
        unique: 'elevation',
        icon: '',
        title: 'Elevation 海拔',
        link: '/style/elevation'
      }
    ]
  }
]