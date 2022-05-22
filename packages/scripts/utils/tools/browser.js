/**
 * @description 返回滚动条滚动距离
 */ 
export const getScrollOffset = function() {
  if (window.pageXOffset) {
    return {
      x: window.pageXOffset,
      y: window.pageYOffset
    }
  }else {
    return {
      x: document.body.scrollLeft + document.documentElement.scrollLeft,
      y: document.body.scrollTop + document.documentElement.scrollTop
    }
  }
}

/**
 * @description 返回视口尺寸
 */ 
export const getViewportSize = function() {
  if(window.innerWidth) {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }else {
    // ie8及其以下
    if (document.compatMode === 'BackCompat') {
      // 怪异模式
      return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
      }
    } else {
      // 标准模式
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    }
  }
}

/**
 * @description 将 url 参数解析为 JS 对象
 * @param {String} search
 */ 
 export const queryToObject = function(search) {
  const obj = {}
  const params = search.replace(/^\?/, '')

  params.split('&').map(item => {
      const arr = item.split('=')
      const key = arr[0]
      const val = arr[1]
      obj[key] = val
  })
  
  return obj
};