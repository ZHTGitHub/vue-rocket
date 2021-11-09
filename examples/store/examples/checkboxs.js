import checkboxsAttributes from '../../mockdata/checkboxs-attributes.json'
import checkboxsMethods from '../../mockdata/checkboxs-methods.json'
import checkboxsSlots from '../../mockdata/checkboxs-slots.json'

const actions = {
  GET_CHECKBOXS_ATTRIBUTES() {
    return checkboxsAttributes
  },

  GET_CHECKBOXS_METHODS() {
    return checkboxsMethods
  },

  GET_CHECKBOXS_SLOTS() {
    return checkboxsSlots
  }
}

export default {
  actions
}