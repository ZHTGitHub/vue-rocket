import buttonAttributes from '../../mockdata/button-attributes.json'
import buttonMethods from '../../mockdata/button-methods.json'

const actions = {
  GET_BUTTON_ATTRIBUTES() {
    return buttonAttributes
  },

  GET_BUTTON_METHODS() {
    return buttonMethods
  }
}

export default {
  actions
}