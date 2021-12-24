const StyleRoutes = {
  path: '/style',
  name: 'ZDemoStyle',
  meta: {
    key: 'style',
    title: '样式',
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
        key: 'text',
        pKey: 'style',
        realm: 'text',
        title: 'Text 文本',
      },
      component: () => import('../../views/Style/Typography')
    },

    {
      path: 'spacing',
      name: 'DemoStyleSpacing',
      meta: {
        key: 'spacing',
        pKey: 'style',
        realm: 'spacing',
        title: 'Spacing 间距',
      },
      component: () => import('../../views/Style/Spacing')
    },

    {
      path: 'flex',
      name: 'DemoStyleFlex',
      meta: {
        key: 'flex',
        pKey: 'style',
        realm: 'flex',
        title: 'Flex 弹性布局',
      },
      component: () => import('../../views/Style/Flex')
    },

    {
      path: 'float',
      name: 'DemoStyleFloat',
      meta: {
        key: 'float',
        pKey: 'style',
        realm: 'float',
        title: 'Float 浮动',
      },
      component: () => import('../../views/Style/Float')
    },

    {
      path: 'radius',
      name: 'DemoStyleRound',
      meta: {
        key: 'radius',
        pKey: 'style',
        realm: 'radius',
        title: 'Border Radius 边框半径',
      },
      component: () => import('../../views/Style/Round')
    },

    {
      path: 'elevation',
      name: 'DemoStyleElevation',
      meta: {
        key: 'elevation',
        pKey: 'style',
        realm: 'elevation',
        title: 'Elevation 海拔',
      },
      component: () => import('../../views/Style/Elevation')
    }
  ]
}

export { StyleRoutes }
export default StyleRoutes