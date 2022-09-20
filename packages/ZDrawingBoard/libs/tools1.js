const tools = {}

/**
 * @description 生成图片
 * @param { String } src
 * @param { Element } imageCanvas
 * @param { Function } callback
 */ 
tools.generateImage = function(src, imageCanvas, callback) {
  const imageCtx = imageCanvas.getContext('2d')
  imageCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height)
  imageCtx.save()

  const image = new Image()
  image.src = src
  image.setAttribute('crossOrigin', 'Anonymous')

  image.onload = function() {
    // 开始剪裁的 x, y 坐标位置
    const [sx, sy] = [0, 0]
    // 被剪裁图像的宽, 高
    const [sWidth, sHeight] = [image.width, image.height]
    // 在画布上放置图像的 x, y 坐标位置
    const [x, y] = [0, 0]
    // 要使用的图像的宽, 高
    const [width, height] = [sWidth, sHeight]

    callback({ imgRealWidth: image.width, imgRealHeight: image.height })

    imageCtx.drawImage(image, sx, sy, sWidth, sHeight, x, y, width, height)  
    imageCtx.restore()
  }

  image.onerror = function() {
    console.log('image load failed!')
  }
}

/**
 * @description 返回光标在 canvas 的坐标
 * @param { Element } canvas
 * @param { Number } clientX 光标到浏览器左侧的距离
 * @param { Number } clientY 光标到浏览器顶部的距离
 */ 
tools.getCoordinatesOnCanvas = function(canvas, clientX, clientY) {
  if(!canvas) {
    return {
      x: 0,
      y: 0
    }
  }

  const domRect = canvas.getBoundingClientRect()

  return {
    x: clientX - domRect.left,
    y: clientY - domRect.top
  }
}

/**
 * @description 返回 imageCanvas 位移距离
 */ 
tools.getImageTranslate = function(imageXOffset, imageYOffset, mouseStartPoint, mouseEndPoint) {
  if(mouseEndPoint) {
    const translateX = imageXOffset + (mouseEndPoint.x - mouseStartPoint.x)
    const translateY = imageYOffset + (mouseEndPoint.y - mouseStartPoint.y)

    return {
      imageXOffset: translateX,
      imageYOffset: translateY
    }
  }

  return {
    imageXOffset,
    imageYOffset
  }
}

/**
 * @description 防抖
 * @param { Function } fn 回调函数
 * @param { Number } delay 间隔
 */ 
tools.throttle = function(fn, delay = 100) {
  let timer = null

  return function() {
      if(timer) return 

      timer = setTimeout(() => {
          fn.apply(this, arguments)
          timer = null
      }, delay)
  }
}

export default tools