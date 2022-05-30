import request from '../../api/service'

const actions = {
  async GET_IMAGE_ATTRIBUTES() {
    const result = await request({
      url: 'api/image/attributes.json'
    })

    return result
  },

  GET_IMAGE_METHODS() {
    return {
      code: 200,
      items: []
    }
  },

  GET_IMAGE_SLOTS() {
    return {
      code: 200,
      items: []
    }
  }
}

export default {
  actions
}