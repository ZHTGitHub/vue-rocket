import switchAttributes from '../../mockdata/switch-attributes.json'
import switchMehtods from '../../mockdata/switch-methods.json'

const actions = {
  GET_SWITCH_ATTRIBUTES() {
    return switchAttributes
  },

  GET_SWITCH_METHODS() {
    return switchMehtods
  }
}

export default {
  actions
}