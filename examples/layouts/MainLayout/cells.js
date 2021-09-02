export const menus = [
  // {
  //   pId: '0',
  //   id: '1',
  //   index: 0,
  //   icon: 'mdi-home',
  //   title: '首页',
  //   link: '/home',
  //   leaf: false
  // },
  {
    pId: '0',
    id: '2',
    index: 1,
    icon: 'mdi-book-open-blank-variant',
    title: '示例',
    link: '',
    leaf: true,
    children: [
      {
        pId: '2',
        id: '2-1',
        index: 0,
        icon: 'mdi-view-dashboard',
        title: '组件',
        link: '/demo/components',
        leaf: true,
        children: [
          {
            pId: '2-1',
            id: '2-1-1',
            index: 0,
            icon: '',
            title: 'Input 输入框',
            link: '/demo/components/input'
          },
          {
            pId: '2-1',
            id: '2-1-2',
            index: 1,
            icon: '',
            title: 'Select 选择器',
            link: '/demo/components/select'
          },
          {
            pId: '2-1',
            id: '2-1-3',
            index: 2,
            icon: '',
            title: 'Checkboxs 多选框',
            link: '/demo/components/checkboxs'
          },
          {
            pId: '2-1',
            id: '2-1-4',
            index: 3,
            icon: '',
            title: 'Radios 单选框',
            link: '/demo/components/radios'
          },
          {
            pId: '2-1',
            id: '2-1-5',
            index: 4,
            icon: '',
            title: 'Switch 开关',
            link: '/demo/components/switch'
          },
          {
            pId: '2-1',
            id: '2-1-6',
            index: 5,
            icon: '',
            title: 'Button 按钮',
            link: '/demo/components/button'
          },
          {
            pId: '2-1',
            id: '2-1-7',
            index: 6,
            icon: '',
            title: 'Pagination 分页',
            link: '/demo/components/pagination'
          },
          {
            pId: '2-1',
            id: '2-1-8',
            index: 7,
            icon: '',
            title: 'Drawer 导航抽屉',
            link: '/demo/components/drawer'
          }
        ]
      },
      {
        pId: '2',
        id: '2-2',
        index: 1,
        icon: 'mdi-form-select',
        title: '表单',
        link: '/demo/form',
        leaf: false
      },
      {
        pId: '2',
        id: '2-3',
        index: 2,
        icon: 'mdi-table',
        title: '表格',
        link: '/demo/table',
        leaf: false
      },
      {
        pId: '2',
        id: '2-4',
        index: 3,
        icon: 'mdi-language-css3',
        title: '样式',
        link: '/demo/style',
        leaf: false
      }
    ]
  }
]