import autocompleteAttributes from '../../mockdata/autocomplete-attributes.json'
import autocompleteMethods from '../../mockdata/autocomplete-methods.json'

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