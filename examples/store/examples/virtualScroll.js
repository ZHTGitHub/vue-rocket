import request from '../../api/service'

const actions = {
  async VIRTUAL_SCROLL_GET_ATTRIBUTES() {
    const result = await request({
      url: 'api/virtual-scroll/attributes.json'
    })

    return result
  },

  async VIRTUAL_SCROLL_GET_SLOTS() {
    const result = await request({
      url: 'api/virtual-scroll/slots.json'
    })

    return result
  }
}

export default {
  actions
}