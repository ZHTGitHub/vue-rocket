import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import store from '../../packages/store'

// modules
const files = require.context('./examples', false, /\.js$/)
const modules = {}

files.keys().map(key => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default new Vuex.Store({
  ...store,
  modules
})