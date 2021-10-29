import autocompleteAttributes from '../../mockdata/autocomplete-attributes.json'
import autocompleteMethods from '../../mockdata/autocomplete-methods.json'
import autocompleteSlots from '../../mockdata/autocomplete-slots.json'

const actions = {
  GET_AUTOCOMPLETE_ATTRIBUTES() {
    return autocompleteAttributes
  },

  GET_AUTOCOMPLETE_METHODS() {
    return autocompleteMethods
  },

  GET_AUTOCOMPLETE_SLOTS() {
    return autocompleteSlots
  }
}

export default {
  actions
}