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
    component: () => import('../views/Form')
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