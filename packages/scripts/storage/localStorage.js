const localStore = {
  set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  },

  get(key) {
    return JSON.parse(window.localStorage.getItem(key))
  },

  del(key) {
    window.localStorage.removeItem(key)
  },

  clear() {
    window.localStorage.clear()
  }
}

export default localStore