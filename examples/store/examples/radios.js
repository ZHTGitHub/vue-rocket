import radiosAttributes from '../../mockdata/radios-attributes.json'
import radiosMethods from '../../mockdata/radios-methods.json'

const actions = {
  GET_RADIOS_ATTRIBUTES() {
    return radiosAttributes
  },

  GET_RADIOS_METHODS() {
    return radiosMethods
  }
}

export default {
  actions
}