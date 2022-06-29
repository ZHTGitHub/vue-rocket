const sessionStorage = {
  /**
   * @description 设置
   * @param {Object|String} key
   */ 
  set(key, value) {
    if(!tools.isObject(key)) {
      window.sessionStorage.setItem(key, JSON.stringify(value))
    }
    else {
      const obj = { ...key }

      for(let k in obj) {
        window.sessionStorage.setItem(k, JSON.stringify(obj[k]))
      }
    }
  },

  /**
   * @description 获取
   * @param {Array|String} key
   */ 
  get(key) {
    if(!tools.isArray(key)) {
      return JSON.parse(window.sessionStorage.getItem(key))
    }
    else {
      const arr = [...key]
      const obj = {}

      arr.map(k => {
        obj[k] = JSON.parse(window.sessionStorage.getItem(k))
      })

      return obj
    }
  },

  /**
   * @description 删除
   * @param {Array|String} key
   */ 
  delete(key) {
    if(!Array.isArray(key)) {
      window.sessionStorage.removeItem(key)
    }
    else {
      [...key].map(k => {
        window.sessionStorage.removeItem(k)
      })
    }
  },

  /**
   * @description 清空
   */ 
  clear() {
    window.sessionStorage.clear()
  }
}

export default sessionStorage