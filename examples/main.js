import Vue from 'vue'
import App from './App.vue'

import router from './router'

import vuetify from './plugins/vuetify'

import request from './api/request'
Vue.prototype.$request = request

import vueRocket from '../packages'
import '../packages/styles/styles.css'
Vue.use(vueRocket)

import DemoComponents from './Components'
Vue.use(DemoComponents)

import store from './store'

// import util from './libs/util'

// Vue.prototype.util = util

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
