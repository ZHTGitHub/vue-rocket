import request from "@/api/request"

const actions = {
  async GET_USERS() {
    const result = await request({
      url: 'users'
    })
    return {
      total: 2,
      data: result
    }
  }
}

export default {
  actions
}