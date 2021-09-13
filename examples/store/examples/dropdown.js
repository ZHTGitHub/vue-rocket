import dropdownAttributes from '../../mockdata/dropdown-attributes.json'
import dropdownMethods from '../../mockdata/dropdown-methods.json'

const actions = {
  GET_DROPDOWN_ATTRIBUTES() {
    return dropdownAttributes
  },

  GET_DROPDOWN_METHODS() {
    return dropdownMethods
  }
}

export default {
  actions
}