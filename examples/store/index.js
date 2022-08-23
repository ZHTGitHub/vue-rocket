import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import forms from '../../packages/scripts/forms'

// modules
const files = require.context('./examples', false, /\.js$/)
const modules = {}

files.keys().map(key => {
  console.log(key)
  console.log(files(key))
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default new Vuex.Store({
  ...forms,
  modules
})