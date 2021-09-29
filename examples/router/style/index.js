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
        nodeKey: 'style',
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
        nodeKey: 'style',
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
        nodeKey: 'style',
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
        nodeKey: 'style',
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
        nodeKey: 'style',
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
        nodeKey: 'style',
        realm: 'elevation',
        title: 'Elevation 海拔',
      },
      component: () => import('../../views/Style/Elevation')
    }
  ]
}

export { StyleRoutes }
export default StyleRoutes