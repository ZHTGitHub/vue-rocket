import Vue from 'vue'
import App from './App.vue'

import router from './router'

import vuetify from './plugins/vuetify'
import './plugins/vue-toastification'
import './plugins/highlight'

import 'animate.css'

import request from './api/service'
Vue.prototype.$request = request

import vueRocket from '../packages'
import '../packages/styles/styles.css'
Vue.use(vueRocket)

import DemoComponents from './components'
Vue.use(DemoComponents)

import store from './store'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
