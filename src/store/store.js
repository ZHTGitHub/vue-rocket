import Vue from 'vue'
import _ from 'lodash'

const state = {
  forms: {},
  validator: {}
}

const getters = {
  forms: state => state.forms,
  validator: state => state.validator
}

const mutations = {
  SET_FORM_VALUE_BY_KEY(state, data) {
    const updatedForm = { ...state.forms }
    _.set(updatedForm, data.formId + '.' + data.formKey, data.value)
    Vue.set(state, 'forms', updatedForm) 
  },

  CLEAN_FORM(state, data) {
    Vue.set(state.forms, data.formId, {})
  },

  RESET_FORM(state, data) {
    Vue.set(state.forms, data.formId, { ...data.defaultForm })
  },

  VALIDATE_FORM_VALUE_BY_KEY(state, data) {
    const updatedValidator = { ...state.validator }
    _.set(updatedValidator, data.formId + '.' + data.formKey, data.status)
    Vue.set(state, 'validator', updatedValidator) 
  }
}

export default {
    state,
    getters,
    mutations
}