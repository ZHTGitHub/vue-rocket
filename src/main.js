import Vue from 'vue'
import App from './App.vue'

import vuetify from '@/plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import './styles/styles.css'

import bus from './plugins/emiter'
Vue.prototype.$bus = bus

import ZComponents from './components'
Vue.use(ZComponents)

import store from './store'

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app')
