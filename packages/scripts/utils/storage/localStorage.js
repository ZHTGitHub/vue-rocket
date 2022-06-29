import tools from '../tools'

const localStorage = {
  /**
   * @description 设置
   * @param {Object|String} key
   */ 
  set(key, value) {
    if(!tools.isObject(key)) {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
    else {
      const obj = { ...key }

      for(let k in obj) {
        window.localStorage.setItem(k, JSON.stringify(obj[k]))
      }
    }
  },

  /**
   * @description 获取
   * @param {Array|String} key
   */ 
  get(key) {
    if(!tools.isArray(key)) {
      return JSON.parse(window.localStorage.getItem(key))
    }
    else {
      const arr = [...key]
      const obj = {}

      arr.map(k => {
        obj[k] = JSON.parse(window.localStorage.getItem(k))
      })

      return obj
    }
  },

  /**
   * @description 删除
   * @param {Array|String} key
   */ 
  delete(key) {
    if(!tools.isArray(key)) {
      window.localStorage.removeItem(key)
    }
    else {
      const arr = [...key]

      arr.map(k => {
        window.localStorage.removeItem(k)
      })
    }
  },

  /**
   * @description 清空
   */ 
  clear() {
    window.localStorage.clear()
  }
}

export default localStorage