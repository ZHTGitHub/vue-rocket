import textareaAttributes from '../../mockdata/textarea-attributes.json'
import textareaMethods from '../../mockdata/textarea-methods.json'
import textareaSlots from '../../mockdata/textarea-slots.json'

const actions = {
  GET_TEXTAREA_ATTRIBUTES() {
    return textareaAttributes
  },

  GET_TEXTAREA_METHODS() {
    return textareaMethods
  },

  GET_TEXTAREA_SLOTS() {
    return textareaSlots
  }
}

export default {
  actions
}