import ComponentRoutes from './component'
import StyleRoutes from './style'
import PluginsRoutes from './plugins'

const router = [
  {
    path: '',
    redirect: 'home'
  },
  
  {
    path: '/home',
    name: 'ZHome',
    meta: {
      key: 'home',
      realm: 'home',
      title: '首页',
    },
    component: () => import('../views/Home')
  },

  {
    path: '/form',
    name: 'ZDemoForm',
    meta: {
      key: 'form',
      title: '表单',
    },
    component: () => import('../views/Form'),
    children: [
      {
        path: '/form',
        redirect: 'rules'
      },

      {
        path: 'rules',
        name: 'ZDemoRules',
        meta: {
          pKey: 'form',
          key: 'rules',
          realm: 'rules',
          title: 'Rules 校验规则',
        },
        component: () => import('../views/Form/Rules')
      },

      {
        path: 'examples',
        name: 'ZDemoExamples',
        meta: {
          pKey: 'form',
          key: 'examples',
          realm: 'examples',
          title: '表单使用示例',
        },
        component: () => import('../views/Form/Examples')
      },
    ]
  },

  ComponentRoutes,
  StyleRoutes,
  PluginsRoutes
]

export { router }
export default router