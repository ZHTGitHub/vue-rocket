import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes'

// Fix vue-router NavigationDuplicated
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const originalReplace = Router.prototype.replace
Router.prototype.replace = function replace (location) {
  return originalReplace.call(this, location).catch(err => err)
}

Vue.use(Router)

const router = new Router({
    routes
})

export default router