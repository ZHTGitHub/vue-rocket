const imageEvent = {}

/**
 * @description 放大
 * @param { Object } params
 */ 
imageEvent.zoomIn = (params) => {
  let scale = params.scale * 1.1
  params.scale = scale

  return scale
}

/**
 * @description 缩小
 * @param { Object } params
 */ 
imageEvent.zoomOut = (params) => {
  let scale = params.scale * 0.9
  params.scale = scale

  return scale
}

/**
 * @description 还原
 * @param { Object } params
 */ 
imageEvent.zoomOrigin = (params) => {
  let scale = 1
  params.scale = scale

  return scale
}

/**
 * @description 向上移动
 * @param { Object } params
 */ 
imageEvent.moveTop = (params) => {
  let moveY = params.moveY - params.moveSpace
  params.moveY = moveY

  return moveY
}

/**
 * @description 向右移动
 * @param { Object } params
 */ 
imageEvent.moveRight = (params) => {
  let moveX = params.moveX + params.moveSpace
  params.moveX = moveX

  return moveX
}

/**
 * @description 向下移动
 * @param { Object } params
 */ 
imageEvent.moveBottom = (params) => {
  let moveY = params.moveY + params.moveSpace
  params.moveY = moveY

  return moveY
}

/**
 * @description 向左移动
 * @param { Object } params
 */ 
imageEvent.moveLeft = (params) => {
  let moveX = params.moveX - params.moveSpace
  params.moveX = moveX

  return moveX
}

export default imageEvent