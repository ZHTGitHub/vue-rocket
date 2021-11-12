class Event {
  constructor() {
    this.events = {}
  }

  emit(eventName, data) {
    if(this.events[eventName]) {
      this.events[eventName].forEach(function(fn) {
        fn(data)
      })
    }
  }

  on(eventName, fn) {
    this.events[eventName] = this.events[eventName] || []
    this.events[eventName].push(fn)
  }

  off(eventName, fn) {
    if (this.events[eventName]) {
      const lastIndex = this.events[eventName].length - 1
      
      for (let i = lastIndex; i >= 0; i--) {
        if (this.events[eventName][i] === fn) {
          this.events[eventName].splice(i, 1)
          break
        }
      }
    }
  }
}

export default new Event()