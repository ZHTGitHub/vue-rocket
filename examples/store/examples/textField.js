import request from '../../api/service'

const actions = {
  async TEXT_FIELD_GET_ATTRIBUTES() {
    const result = await request({
      url: 'api/text-field/attributes.json'
    })

    return result
  },

  async TEXT_FIELD_GET_METHODS() {
    const result = await request({
      url: 'api/text-field/methods.json'
    })

    return result
  },

  async TEXT_FIELD_GET_SLOTS() {
    const result = await request({
      url: 'api/text-field/slots.json'
    })

    return result
  }
}

export default {
  actions
}