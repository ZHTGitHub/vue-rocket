import uploadAttributes from '../../mockdata/upload-attributes.json'
import uploadMethods from '../../mockdata/upload-methods.json'
import uploadSlots from '../../mockdata/upload-slots.json'

const actions = {
  GET_UPLOAD_ATTRIBUTES() {
    return uploadAttributes
  },

  GET_UPLOAD_METHODS() {
    return uploadMethods
  },

  GET_UPLOAD_SLOTS() {
    return uploadSlots
  }
}

export default {
  actions
}