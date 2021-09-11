import selectAttributes from '../../mockdata/select-attributes.json'
import selectMethods from '../../mockdata/select-methods.json'

const actions = {
  GET_SELECT_ATTRIBUTES() {
    return selectAttributes
  },

  GET_SELECT_METHODS() {
    return selectMethods
  }
}

export default {
  actions
}