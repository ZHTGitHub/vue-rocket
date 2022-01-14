import checkboxAttributes from '../../mockdata/checkbox-attributes.json'
import checkboxMethods from '../../mockdata/checkbox-methods.json'
import checkboxSlots from '../../mockdata/checkbox-slots.json'

const actions = {
  GET_CHECKBOX_ATTRIBUTES() {
    return checkboxAttributes
  },

  GET_CHECKBOX_METHODS() {
    return checkboxMethods
  },

  GET_CHECKBOX_SLOTS() {
    return checkboxSlots
  }
}

export default {
  actions
}