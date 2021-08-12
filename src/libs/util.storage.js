class Storage {
  /**
   * @description 存储 localStorage 值
   * @param {String} key localStorage key
   * @param {Any} value localStorage value
   */ 
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  /**
   * @description 拿到 localStorage 值
   * @param {String} key localStorage key
   */ 
  get(key) {
    return JSON.parse(localStorage.getItem(key))
  }

  /**
   * @description 删除 localStorage 值
   * @param {String} key localStorage key
   */ 
  del(key) {
    localStorage.removeItem(key)
  }
}

export { Storage }
export default Storage