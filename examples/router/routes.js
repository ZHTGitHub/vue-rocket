import ComponentRoutes from './component'
import StyleRoutes from './style'

const router = [
  {
    path: '',
    redirect: 'home'
  },
  
  {
    path: '/home',
    name: 'ZHome',
    meta: {
      title: '首页',
      unique: 'home'
    },
    component: () => import('../views/Home')
  },

  {
    path: '/form',
    name: 'ZDemoForm',
    meta: {
      title: '表单',
      unique: 'form'
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
          title: 'Rules 校验规则',
          unique: 'rules',
          parent: 'form'
        },
        component: () => import('../views/Form/Rules')
      },

      {
        path: 'examples',
        name: 'ZDemoExamples',
        meta: {
          title: 'Examples 使用示例',
          unique: 'examples',
          parent: 'form'
        },
        component: () => import('../views/Form/Examples')
      },
    ]
  },

  {
    path: '/table',
    name: 'ZDemoTable',
    meta: {
      title: '表格',
      unique: 'table'
    },
    component: () => import('../views/Table')
  },

  ComponentRoutes,
  StyleRoutes
]

export { router }
export default router