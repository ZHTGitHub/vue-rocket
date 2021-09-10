import request from "../../api/request"

const actions = {
  async GET_USERS() {
    const result = await request({
      url: 'users'
    })
    console.log(result)
    return result
  }
}

export default {
  actions
}