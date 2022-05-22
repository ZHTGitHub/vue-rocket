const sessionStorage = {
  set(key, value) {
    window.sessionStorage.setItem(key, JSON.stringify(value))
  },

  get(key) {
    return JSON.parse(window.sessionStorage.getItem(key))
  },

  del(key) {
    window.sessionStorage.removeItem(key)
  },

  clear() {
    window.sessionStorage.clear()
  }
}

export default sessionStorage