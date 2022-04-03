import request from '../../api/service'

const actions = {
  async GLOBAL_GET_TABS() {
    const result = await request({
      url: 'api/global/header/tabs.json'
    })

    return result
  },

  async GLOBAL_GET_MENU({}, value) {
    const result = await request({
      url: `api/global/sidebar/${ value }.json`
    })

    return result
  }
}

export default {
  actions
}