export const menus = [
  {
    pId: '-1',
    id: 'home',
    key: 'home',
    icon: 'mdi-home',
    realm: 'home',
    title: '首页',
    link: '/home',
    leaf: false
  },

  {
    pId: '-1',
    id: 'form',
    key: 'form',
    icon: 'mdi-form-select',
    title: '表单',
    link: '/form',
    leaf: true,
    children: [
      {
        pId: 'form',
        key: 'rules',
        icon: '',
        realm: 'rules',
        title: 'Rules 校验规则',
        link: '/form/rules'
      },

      {
        pId: 'form',
        key: 'examples',
        icon: '',
        realm: 'examples',
        title: 'Examples 使用示例',
        link: '/form/examples'
      }
    ]
  },

  {
    pId: '-1',
    id: 'components',
    key: 'components',
    expanded: false,
    icon: 'mdi-view-dashboard',
    title: '组件',
    link: '/components',
    leaf: true,
    children: [
      {
        pId: 'components',
        key: 'autocomplete',
        icon: '',
        realm: 'autocomplete',
        title: 'Autocomplete 自动补全',
        link: '/components/autocomplete'
      },

      {
        pId: 'components',
        key: 'button',
        icon: '',
        realm: 'button',
        title: 'Button 按钮',
        link: '/components/button'
      },

      {
        pId: 'components',
        key: 'buttonToggle',
        icon: '',
        realm: 'buttonToggle',
        title: 'Button Groups 按钮组',
        link: '/components/button-toggle'
      },

      {
        pId: 'components',
        key: 'calendar',
        icon: '',
        realm: 'calendar',
        title: 'Calendar 日历（即将移除）',
        link: '/components/calendar'
      },

      {
        pId: 'components',
        key: 'checkbox',
        icon: '',
        realm: 'checkbox',
        title: 'Checkbox 复选框',
        link: '/components/checkbox'
      },

      {
        pId: 'components',
        key: 'checkboxs',
        icon: '',
        realm: 'checkboxs',
        title: 'Checkboxs 多选框',
        link: '/components/checkboxs'
      },

      {
        pId: 'components',
        key: 'datePicker',
        icon: '',
        realm: 'datePicker',
        title: 'Date Picker 日期选择器',
        link: '/components/date-picker'
      },

      {
        pId: 'components',
        key: 'drawer',
        icon: '',
        realm: 'drawer',
        title: 'Drawer 导航抽屉（即将移除）',
        link: '/components/drawer'
      },
      
      {
        pId: 'components',
        key: 'drawImage',
        icon: '',
        realm: 'drawImage',
        title: 'Draw image 绘图',
        link: '/components/drawImage'
      },

      {
        pId: 'components',
        key: 'dropdown',
        icon: '',
        realm: 'dropdown',
        title: 'Dropdown 下拉菜单',
        link: '/components/dropdown'
      },

      {
        pId: 'components',
        key: 'dynamicForm',
        icon: '',
        realm: 'dynamicForm',
        title: 'DynamicForm 动态表单',
        link: '/components/dynamicForm'
      },

      {
        pId: 'components',
        key: 'fileInput',
        icon: '',
        realm: 'fileInput',
        title: 'File Input 文件上传',
        link: '/components/fileInput'
      },

      {
        pId: 'components',
        key: 'input',
        icon: '',
        realm: 'input',
        title: 'Input 输入框',
        link: '/components/input'
      },

      {
        pId: 'components',
        key: 'pagination',
        icon: '',
        realm: 'pagination',
        title: 'Pagination 分页',
        link: '/components/pagination'
      },

      {
        pId: 'components',
        key: 'radios',
        icon: '',
        realm: 'radios',
        title: 'Radios 单选框',
        link: '/components/radios'
      },

      {
        pId: 'components',
        key: 'select',
        icon: '',
        realm: 'select',
        title: 'Select 选择器',
        link: '/components/select'
      },

      {
        pId: 'components',
        key: 'switch',
        icon: '',
        realm: 'switch',
        title: 'Switch 开关',
        link: '/components/switch'
      },

      {
        pId: 'components',
        key: 'textarea',
        icon: '',
        realm: 'textarea',
        title: 'Teaxarea 多行文本框',
        link: '/components/textarea'
      },

      {
        pId: 'components',
        key: 'upload',
        icon: '',
        realm: 'upload',
        title: 'Upload 上传',
        link: '/components/upload'
      }
    ]
  },

  {
    pId: '-1',
    id: 'style',
    key: 'style',
    icon: 'mdi-language-css3',
    title: '样式',
    link: '/style',
    leaf: true,
    children: [
      {
        pId: 'style',
        key: 'text',
        icon: '',
        realm: 'text',
        title: 'Text 文本',
        link: '/style/text'
      },

      {
        pId: 'style',
        key: 'spacing',
        icon: '',
        realm: 'spacing',
        title: 'Spacing 间距',
        link: '/style/spacing'
      },

      {
        pId: 'style',
        key: 'flex',
        icon: '',
        realm: 'flex',
        title: 'Flex 弹性布局',
        link: '/style/flex'
      },

      {
        pId: 'style',
        key: 'float',
        icon: '',
        realm: 'float',
        title: 'Float 浮动',
        link: '/style/float'
      },

      {
        pId: 'style',
        key: 'radius',
        icon: '',
        realm: 'radius',
        title: 'Border Radius 边框半径',
        link: '/style/radius'
      },

      {
        pId: 'style',
        key: 'elevation',
        icon: '',
        realm: 'elevation',
        title: 'Elevation 海拔',
        link: '/style/elevation'
      }
    ]
  },

  {
    pId: '-1',
    id: 'JSUtil',
    key: 'JSUtil',
    icon: 'mdi-hammer-wrench',
    title: 'JSUtil',
    link: '/JSUtil',
    leaf: true,
    children: [
      {
        pId: 'JSUtil',
        key: 'tools',
        icon: '',
        realm: 'tools',
        title: '工具 tools',
        link: '/JSUtil/tools'
      }
    ]
  },

  {
    pId: '-1',
    id: 'plugins',
    key: 'plugins',
    icon: 'mdi-puzzle',
    title: '插件',
    link: '/plugins',
    leaf: true,
    children: [
      {
        pId: 'plugins',
        key: 'xml',
        icon: '',
        realm: 'xml',
        title: '编辑 xml',
        link: '/plugins/xml'
      },

      {
        pId: 'plugins',
        key: 'scroll',
        icon: '',
        realm: 'scroll',
        title: '滚动 scroll',
        link: '/plugins/scroll'
      }
    ]
  }
]