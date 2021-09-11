import paginationAttributes from '../../mockdata/pagination-attributes.json'
import paginationMethods from '../../mockdata/pagination-methods.json'

const actions = {
  GET_PAGINATION_ATTRIBUTES() {
    return paginationAttributes
  },

  GET_PAGINATION_METHODS() {
    return paginationMethods
  }
}

export default {
  actions
}