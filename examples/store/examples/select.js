import selectAttributes from '../../mockdata/select-attributes.json'
import selectMethods from '../../mockdata/select-methods.json'
import selectSlots from '../../mockdata/select-slots.json'

const actions = {
  GET_SELECT_ATTRIBUTES() {
    return selectAttributes
  },

  GET_SELECT_METHODS() {
    return selectMethods
  },

  GET_SELECT_SLOTS() {
    return selectSlots
  }
}

export default {
  actions
}