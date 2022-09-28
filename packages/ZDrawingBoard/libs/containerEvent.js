const containerEvent = {}

/**
 * @description 放大
 * @param { Object } params
 */ 
containerEvent.zoomOut = (params) => {
  let scale = params.scale * 1.1
  params.scale = scale

  return scale
}

/**
 * @description 缩小
 * @param { Object } params
 */ 
containerEvent.zoomIn = (params) => {
  let scale = params.scale * 0.9
  params.scale = scale

  return scale
}

/**
 * @description 右旋转
 * @param { Object } params
 */ 
containerEvent.rotateRight = (params) => {
  let angle = params.angle + 90
  params.angle = angle

  return angle
}

/**
 * @description 左旋转
 * @param { Object } params
 */ 
containerEvent.rotateLeft = (params) => {
  let angle = params.angle - 90
  params.angle = angle

  return angle
}

/**
 * @description 向上移动
 * @param { Object } params
 */ 
containerEvent.moveTop = (params) => {
  let moveY = params.moveY - params.moveSpace
  params.moveY = moveY

  return moveY
}

/**
 * @description 向右移动
 * @param { Object } params
 */ 
 containerEvent.moveRight = (params) => {
  let moveX = params.moveX + params.moveSpace
  params.moveX = moveX

  return moveX
}

/**
 * @description 向下移动
 * @param { Object } params
 */ 
 containerEvent.moveBottom = (params) => {
  let moveY = params.moveY + params.moveSpace
  params.moveY = moveY

  return moveY
}

/**
 * @description 向左移动
 * @param { Object } params
 */ 
 containerEvent.moveLeft = (params) => {
  let moveX = params.moveX - params.moveSpace
  params.moveX = moveX

  return moveX
}

export default containerEvent