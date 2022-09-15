const tools = {}

/**
 * @description 生成图片
 * @param { String } src
 * @param { Element } canvas
 * @param { Function } callback
 */ 
tools.generateImage = function(src, canvas, callback) {
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.save()

  const image = new Image()
  image.src = src
  image.setAttribute('crossOrigin', 'Anonymous')

  image.onload = function() {
    // 开始剪裁的 x, y 坐标位置
    const [sx, sy] = [0, 0]
    // 被剪裁图像的高, 宽
    const [sHeight, sWidth] = [image.height, image.width]
    // 在画布上放置图像的 x, y 坐标位置
    const [x, y] = [0, 0]
    // 要使用的图像的高, 宽
    const [height, width] = [sHeight, sWidth]

    callback({ imageHeight: image.height, imageWidth: image.width })

    ctx.drawImage(image, sx, sy, sWidth, sHeight, x, y, width, height)
    ctx.restore()
  }

  image.onerror = function() {
    console.log('image load failed!')
  }
}

tools.getCoordinatesOnCanvas = function(canvas, clientX, clientY) {
  if(!canvas) {
    return {
      x: 0,
      y: 0
    }
  }

  const box = canvas.getBoundingClientRect()

  return {
    x: clientX - box.left,
    y: clientY - box.top
  }
}

export default tools