import Vue from 'vue'
import { tools } from './utils'

const state = {
  formsValidate: {}
}

const getters = {
  forms: state => state.formsValidate
}

const mutations = {
  // 给校验表单的每个 [value] 所对应的 [key] 设置 [value] 的校验结果
  SET_FORM_VALIDATE_VALUE_BY_KEY(state, data) {
    const updatedForm = { ...state.formsValidate }
    tools.set(updatedForm, data.formId + '.' + data.formKey, data.status)
    Vue.set(state, 'formsValidate', updatedForm) 
  },

  // 删除校验表单的[key]
  DELETE_FORM_VALIDATE_KEY(state, data) {
    const updatedForm = { ...state.formsValidate }
    delete updatedForm[data.formId][data.formKey]

    const form = this.validator[data.formId]
    const values = Object.values(form)
    const total = values.length

    
  }
}

export default {
  state,
  getters,
  mutations
}