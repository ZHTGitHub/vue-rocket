const fontFamily = 'Microsoft YaHei'
const fontSize = 18
const fontWeight = 'bold'

// 保存文本在 canvas 上的坐标
const saveTextCoordinates = (field, x, y) => {
  field.setAttribute('data-text-x', x + 9)
  field.setAttribute('data-text-y', y + 25)
}

// 粘贴文本
const pasteText = (imageCanvas, color, text, textX, textY, params) => {
  const imageCtx = imageCanvas.getContext('2d')
  const { imageScale, scale } = params

  console.log(params)

  const diffX = (params.imageWidth * scale - params.imageWidth) / 2
  const diffY = (params.imageHeight * scale - params.imageHeight) / 2

  // console.log({ imageWidth: params.imageWidth, scaleImageWidth: params.imageWidth * scale, diffX })

  const x = (textX - params.imageXOffset) / imageScale
  const y = (textY - params.imageYOffset) / imageScale

  imageCtx.font = `${ fontWeight } ${ fontSize / imageScale / scale }px ${ fontFamily }`
  imageCtx.fillStyle = color
  imageCtx.strokeStyle = color
  imageCtx.fillText(text, x, y)
  imageCtx.restore()
}

// 绘制文本
const drawText = ({ canvas, imageCanvas, coordinates, color, params }) => {
  const ctx = canvas.getContext('2d')
  const { x, y } = coordinates

  const view = document.querySelector('#view')
  let field = document.querySelector('#field')

  // 创建文本输入框
  if(!field) {
    field = document.createElement('div')

    field.setAttribute('id', 'field')
    field.setAttribute('contenteditable', 'true')
    field.setAttribute('tabindex', '0')
    saveTextCoordinates(field, x, y)
    field.style.left = x + 'px'
    field.style.top = y + 'px'
    field.style.border = `1px solid ${ color }`
    field.style.color = color

    view.appendChild(field)
  }

  if(field.innerHTML) {
    field.setAttribute('contenteditable', 'false')
    field.style.border = '1px solid transparent'
  }
  else {
    field.setAttribute('contenteditable', 'true')
    saveTextCoordinates(field, x, y)
    field.style.left = x + 'px'
    field.style.top = y + 'px'
    field.style.border = `1px solid ${ color }`
  }

  field.onblur = (event) => {
    const dataset = event.target.dataset
    const text = field.innerHTML

    field.innerHTML = ''

    ctx.font = `${ fontWeight } ${ fontSize }px ${ fontFamily }`
    ctx.fillStyle = color
    ctx.strokeStyle = color
    ctx.fillText(text, dataset.textX, dataset.textY)
    ctx.restore()

    pasteText(imageCanvas, color, text, dataset.textX, dataset.textY, params)
  }
}

export default drawText