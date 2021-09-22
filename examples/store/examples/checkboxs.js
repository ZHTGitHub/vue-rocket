import checkboxsAttributes from '../../mockdata/checkboxs-attributes.json'
import checkboxsMethods from '../../mockdata/checkboxs-methods.json'

const actions = {
  GET_CHECKBOXS_ATTRIBUTES() {
    return checkboxsAttributes
  },

  GET_CHECKBOXS_METHODS() {
    return checkboxsMethods
  }
}

export default {
  actions
}