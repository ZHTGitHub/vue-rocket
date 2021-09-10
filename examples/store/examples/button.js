import request from "../../api/request"

const actions = {
  async GET_BUTTON_APIS() {
    const result = await request({
      url: 'button-apis'
    })
    return result
  },

  async GET_BUTTON_METHODS() {
    const result = await request({
      url: 'button-methods'
    })
    return result
  }
}

export default {
  actions
}