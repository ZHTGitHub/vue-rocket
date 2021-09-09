const StyleRoutes = {
  path: '/style',
  name: 'ZDemoStyle',
  meta: {
    title: '样式',
    unique: 'style'
  },
  component: () => import('../../views/Style'),
  children: [
    {
      path: '/style',
      redirect: () => 'text'
    },

    {
      path: 'text',
      name: 'DemoStyleTypography',
      meta: {
        title: 'Text 文本',
        unique: 'text',
        parent: 'style'
      },
      component: () => import('../../views/Style/Typography')
    },

    {
      path: 'spacing',
      name: 'DemoStyleSpacing',
      meta: {
        title: 'Spacing 间距',
        unique: 'spacing',
        parent: 'style'
      },
      component: () => import('../../views/Style/Spacing')
    },

    {
      path: 'flex',
      name: 'DemoStyleFlex',
      meta: {
        title: 'Flex 弹性布局',
        unique: 'flex',
        parent: 'style'
      },
      component: () => import('../../views/Style/Flex')
    },

    {
      path: 'float',
      name: 'DemoStyleFloat',
      meta: {
        title: 'Float 浮动',
        unique: 'float',
        parent: 'style'
      },
      component: () => import('../../views/Style/Float')
    },

    {
      path: 'radius',
      name: 'DemoStyleRound',
      meta: {
        title: 'Border Radius 边框半径',
        unique: 'radius',
        parent: 'style'
      },
      component: () => import('../../views/Style/Round')
    },

    {
      path: 'elevation',
      name: 'DemoStyleElevation',
      meta: {
        title: 'Elevation 海拔',
        unique: 'elevation',
        parent: 'style'
      },
      component: () => import('../../views/Style/Elevation')
    }
  ]
}

export { StyleRoutes }
export default StyleRoutes