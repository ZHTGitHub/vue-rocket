import buttonToggleAttributes from '../../mockdata/button-toggle-attributes.json'
import buttonToggleMethods from '../../mockdata/button-toggle-methods.json'

const actions = {
  GET_BUTTON_TOGGLE_ATTRIBUTES() {
    return buttonToggleAttributes
  },

  GET_BUTTON_TOGGLE_METHODS() {
    return buttonToggleMethods
  }
}

export default {
  actions
}