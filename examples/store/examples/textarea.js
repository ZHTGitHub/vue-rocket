import textareaAttributes from '../../mockdata/textarea-attributes.json'
import textareaMethods from '../../mockdata/textarea-methods.json'

const actions = {
  GET_TEXTAREA_ATTRIBUTES() {
    return textareaAttributes
  },

  GET_TEXTAREA_METHODS() {
    return textareaMethods
  }
}

export default {
  actions
}