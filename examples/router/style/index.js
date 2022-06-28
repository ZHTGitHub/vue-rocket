const StyleRoutes = {
  path: '/styles',
  name: 'ZDemoStyle',
  meta: {
    key: 'styles',
    title: '样式',
  },
  component: () => import('../../views/Style'),
  children: [
    {
      path: '/styles',
      redirect: 'background'
    },

    {
      path: 'background',
      name: 'DemoStyleBackground',
      meta: {
        key: 'background',
        pKey: 'styles',
        realm: 'background',
        title: 'Background 背景',
      },
      component: () => import('../../views/Style/Background')
    },
    
    {
      path: 'elevation',
      name: 'DemoStyleElevation',
      meta: {
        key: 'elevation',
        pKey: 'styles',
        realm: 'elevation',
        title: 'Elevation 海拔',
      },
      component: () => import('../../views/Style/Elevation')
    },

    {
      path: 'display',
      name: 'DemoStyleDisplay',
      meta: {
        key: 'display',
        pKey: 'styles',
        realm: 'display',
        title: 'Display 显示辅助',
      },
      component: () => import('../../views/Style/Display')
    },

    {
      path: 'flex',
      name: 'DemoStyleFlex',
      meta: {
        key: 'flex',
        pKey: 'styles',
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
        pKey: 'styles',
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
        pKey: 'styles',
        realm: 'radius',
        title: 'Border Radius 边框半径',
      },
      component: () => import('../../views/Style/Round')
    },

    {
      path: 'spacing',
      name: 'DemoStyleSpacing',
      meta: {
        key: 'spacing',
        pKey: 'styles',
        realm: 'spacing',
        title: 'Spacing 间距',
      },
      component: () => import('../../views/Style/Spacing')
    },

    {
      path: 'text',
      name: 'DemoStyleTypography',
      meta: {
        key: 'text',
        pKey: 'styles',
        realm: 'text',
        title: 'Text 文本',
      },
      component: () => import('../../views/Style/Typography')
    },
  ]
}

export { StyleRoutes }
export default StyleRoutes