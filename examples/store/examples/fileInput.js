import fileInputAttributes from '../../mockdata/file-input-attributes.json'
import fileInputMethods from '../../mockdata/file-input-methods.json'
import fileInputSlots from '../../mockdata/file-input-slots.json'

const actions = {
  GET_FILE_INPUT_ATTRIBUTES() {
    return fileInputAttributes
  },

  GET_FILE_INPUT_METHODS() {
    return fileInputMethods
  },

  GET_FILE_INPUT_SLOTS() {
    return fileInputSlots
  }
}

export default {
  actions
}