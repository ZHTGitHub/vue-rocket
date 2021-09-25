import autocompleteAttributes from '../../mockdata/button-attributes.json'
import autocompleteMethods from '../../mockdata/button-methods.json'

const actions = {
  GET_AUTOCOMPLETE_ATTRIBUTES() {
    return autocompleteAttributes
  },

  GET_AUTOCOMPLETE_METHODS() {
    return autocompleteMethods
  }
}

export default {
  actions
}