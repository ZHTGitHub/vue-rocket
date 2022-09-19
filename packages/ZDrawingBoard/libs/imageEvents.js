const imageEvent = {}

/**
 * @description 放大
 * @param { Object } params
 */ 
imageEvent.zoomOut = (params) => {
  let scale = params.scale * 1.1
  params.scale = scale

  return scale
}

/**
 * @description 缩小
 * @param { Object } params
 */ 
imageEvent.zoomIn = (params) => {
  let scale = params.scale * 0.9
  params.scale = scale

  return scale
}

/**
 * @description 右旋转
 * @param { Object } params
 */ 
imageEvent.rotateRight = (params) => {
  let degree = params.degree + 90
  params.degree = degree

  return degree
}

/**
 * @description 左旋转
 * @param { Object } params
 */ 
imageEvent.rotateLeft = (params) => {
  let degree = params.degree - 90
  params.degree = degree

  return degree
}

export default imageEvent