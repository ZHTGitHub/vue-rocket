import Vue from 'vue'
import App from './App.vue'

import router from './router'

import vuetify from '@/plugins/vuetify'
import './styles/styles.css'

import bus from './plugins/emiter'
Vue.prototype.$bus = bus

import ZComponents from './components'
Vue.use(ZComponents)

import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app')
