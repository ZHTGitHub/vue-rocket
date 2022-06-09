import request from '../../api/service'

const actions = {
  async GET_LIST_ATTRIBUTES() {
    return {
      code: 200,
      items: []
    }
  },

  GET_LIST_METHODS() {
    return {
      code: 200,
      items: []
    }
  },

  GET_LIST_SLOTS() {
    return {
      code: 200,
      items: []
    }
  }
}

export default {
  actions
}