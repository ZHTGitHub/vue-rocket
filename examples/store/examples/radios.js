import radiosAttributes from '../../mockdata/radios-attributes.json'
import radiosMethods from '../../mockdata/radios-methods.json'
import radiosSlots from '../../mockdata/radios-slots.json'

const actions = {
  GET_RADIOS_ATTRIBUTES() {
    return radiosAttributes
  },

  GET_RADIOS_METHODS() {
    return radiosMethods
  },

  GET_RADIOS_SLOTS() {
    return radiosSlots
  }
}

export default {
  actions
}