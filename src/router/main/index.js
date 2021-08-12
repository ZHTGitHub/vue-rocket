const MainRoutes = {
  path: '/main',
  name: 'ZMain',
  component: () => import('@/views/main'),
  children: []
}

export { MainRoutes }
export default MainRoutes