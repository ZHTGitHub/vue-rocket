import DemoRoutes from './demo'

const router = [
  {
    path: '',
    redirect: '/demo'
  },
  DemoRoutes
]

export { router }
export default router