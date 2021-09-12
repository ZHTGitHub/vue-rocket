import inputAttributes from '../../mockdata/input-attributes.json'
import inputMethods from '../../mockdata/input-methods.json'
import inputSlots from '../../mockdata/input-slots.json'

const actions = {
  GET_INPUT_ATTRIBUTES() {
    return inputAttributes
  },

  GET_INPUT_METHODS() {
    return inputMethods
  },

  GET_INPUT_SLOTS() {
    return inputSlots
  }
}

export default {
  actions
}