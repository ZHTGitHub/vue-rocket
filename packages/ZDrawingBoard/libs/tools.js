// import { imageSuffix, imageEncode } from './constants'

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

// 下载图片
tools.downloadImage = function(dataURL, name = 'screenshot.png') {
  const anchor = document.createElement('a')

  anchor.style.display = 'none'
  anchor.href = dataURL
  anchor.download = name
  document.body.appendChild(anchor)
  anchor.click()
  document.body.removeChild(anchor)
}

// 生成图片
tools.generateImage = function(
  source, 
  { 
    imageWidth, imageHeight, imageSuffix, imageEncode, 
    sx, sy, sw, sh, dx, dy, dw, dh 
  } = {}, 
  func
) {
  const canvas = document.createElement('canvas')

  const image = new Image()
  image.setAttribute('crossOrigin', 'anonymous')

  image.onload = function() {
    const { width, height } = image

    canvas.width = imageWidth || width
    canvas.height = imageHeight || height

    const ctx = canvas.getContext('2d')

    sx = sx || 0
    sy = sy || 0
    sw = sw || width
    sh = sh || height
    dx = dx || 0
    dy = dy || 0
    dw = dw || width
    dh = dh || height

    ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)

    const dataURL = canvas.toDataURL(imageSuffix, imageEncode)

    func(dataURL)
  }

  image.src = source
}

// Base64 转 File
tools.base64ToFile = (base64, name) => {
  let 
    arr = base64.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n)

  while(n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }

  return new File([u8arr], name, { type: mime })
}

// 画布旋转方向
tools.setDirection = (count) => {
  switch (count) {
    case 0:
      return 'TOP';

    case 1:
    case -3:
      return 'RIGHT';

    case 2:
    case -2:
      return 'BOTTOM';

    case 3:
    case -1:
      return 'LEFT';
  }
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