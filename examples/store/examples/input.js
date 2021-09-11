import inputAttributes from '../../mockdata/input-attributes.json'
import inputMethods from '../../mockdata/input-methods.json'

const actions = {
  GET_INPUT_ATTRIBUTES() {
    return inputAttributes
  },

  GET_INPUT_METHODS() {
    return inputMethods
  }
}

export default {
  actions
}