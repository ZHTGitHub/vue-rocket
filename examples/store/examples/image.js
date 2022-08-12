import request from '../../api/service'

const actions = {
  async GET_IMAGE_ATTRIBUTES() {
    const result = await request({
      url: 'api/image/attributes.json'
    })

    return result
  },

  async GET_IMAGE_METHODS() {
    const result = await request({
      url: 'api/image/methods.json'
    })

    return result
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