import DemoRoutes from './demo'
import MainRoutes from './main'

const router = [
  {
    path: '',
    redirect: '/demo'
  },
  DemoRoutes,
  MainRoutes
]

export { router }
export default router