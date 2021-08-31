import Vue from 'vue'
import App from './App.vue'

import router from './router'

import vuetify from '@/plugins/vuetify'
import './styles/styles.css'

import request from './api/request'
Vue.prototype.$request = request

import bus from './plugins/emiter'
Vue.prototype.$bus = bus

import ZComponents from '../packages'
Vue.use(ZComponents)

import DemoComponents from './components'
Vue.use(DemoComponents)

import store from './store'

import util from './libs/util'

Vue.prototype.util = util

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
