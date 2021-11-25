import dynamicFormAttributes from '../../mockdata/dynamic-form-attributes.json'
import dynamicFormMethods from '../../mockdata/dynamic-form-methods.json'

const actions = {
  GET_DYNAMIC_FORM_ATTRIBUTES() {
    return dynamicFormAttributes
  },

  GET_DYNAMIC_FORM_METHODS() {
    return dynamicFormMethods
  }
}

export default {
  actions
}