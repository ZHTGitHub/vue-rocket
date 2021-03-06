import ComponentRoutes from './component'
import StyleRoutes from './style'
import JSUtilRoutes from './JSUtil'

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
    path: '/forms',
    name: 'ZDemoForm',
    meta: {
      key: 'forms',
      title: '表单',
    },
    component: () => import('../views/Form'),
    children: [
      {
        path: '/forms',
        redirect: 'rules'
      },

      {
        path: 'rules',
        name: 'ZDemoRules',
        meta: {
          pKey: 'forms',
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
          pKey: 'forms',
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
  JSUtilRoutes
]

export { router }
export default router