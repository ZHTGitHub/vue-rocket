const tools = {}

// 加载图片
tools.loadImage = function(source, func) {
  const image = new Image()
  image.setAttribute('crossOrigin', 'anonymous')

  image.onload = function() {
    func(image.width, image.height)
  }
  
  image.onerror = function() {
    func(void 0, void 0)
    console.log('image load failed!')
  }

  image.src = source + '?' + Date.now()
}

// 防抖
tools.debounce = (() => {
  let timer = null

  return (fn, delay = 300) => {
    if(timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      fn()
    }, delay)
  }
})()

// 节流
tools.throttle = (() => {
  let timer = null

  return (fn, delay = 100) => {
    if(timer) {
      return
    }

    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
})()

export default tools