const tools = {}

// 加载图片
tools.loadImage = function(source, func) {
  const image = new Image()
  image.setAttribute('crossOrigin', 'anonymous')

  image.onload = function() {
    func(image.width, image.height)
  }
  
  image.onerror = function() {
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
tools.generateImage = function(source, { imageWidth, imageHeight, sx, sy, sw, sh, dx, dy, dw, dh } = {}, func) {
  const canvas = document.createElement('canvas')

  const image = new Image()
  image.src = source

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

    const dataURL = canvas.toDataURL('image/png')

    func(dataURL)
  }
}

export default tools