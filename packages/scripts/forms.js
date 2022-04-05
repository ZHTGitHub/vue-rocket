import Vue from 'vue'
// import _ from 'lodash'
import { set } from './tools'

const state = {
  forms: {}
}

const getters = {
  forms: state => state.forms
}

const mutations = {
  // 给表单的每个[key]设置[value]
  SET_FORM_VALUE_BY_KEY(state, data) {
    const updatedForm = { ...state.forms }
    set(updatedForm, data.formId + '.' + data.formKey, data.value)
    Vue.set(state, 'forms', updatedForm) 
  },

  // 清空表单
  CLEAN_FORM(state, data) {
    const updatedForm = { ...state.forms }
    set(updatedForm, data.formId + '.' + data.formKey, undefined)
    Vue.set(state, 'forms', updatedForm) 
  },

  // 重置表单
  RESET_FORM(state, data) {
    const updatedForm = { ...state.forms }
    set(updatedForm, data.formId + '.' + data.formKey, data.defaultValue)
    Vue.set(state, 'forms', updatedForm) 
  },

  // 删除表单的[key]
  DELETE_FORM_KEY(state, data) {
    const updatedForm = { ...state.forms }
    delete updatedForm[data.formId][data.formKey]
    Vue.set(state, 'forms', updatedForm) 
  }
}

export default {
  state,
  getters,
  mutations
}