import Vue from 'vue'
import _ from 'lodash'

const state = {
  forms: {},
  validates: {}
}

const getters = {
  forms: state => state.forms,
  validates: state => state.validates
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

  SET_VALIDATE_VALUE_BY_KEY(state, data) {
    const updatedValidate = { ...state.validates }
    _.set(updatedValidate, data.formId + '.' + data.formKey, data.value)
    Vue.set(state, 'validates', updatedValidate) 
  }
}

export default {
    state,
    getters,
    mutations
}