import rules from '../validate/rules'

// 值类型
const valueType = ['undefined', 'number', 'string', 'boolean', 'symbol'];

// 引用类型
const referenceType = ['object', 'function'];

/**
 * @description 返回值的数据类型
 * @param {Any} value
 */ 
const getType = function(value) {
  const type = Object.prototype.toString.call(value)

  switch (type) {
    case '[object Boolean]': 
      return 'boolean';

    case '[object Number]': 
      return isNaN(value) ? 'NaN' : 'number'

    case '[object String]': 
      return 'string';

    case '[object Array]': 
      return 'array';

    case '[object Function]': 
      return 'function';

    case '[object Object]': 
      return 'object';

    case '[object Null]': 
      return 'null';
    case '[object Undefined]': 
      return 'undefined';
    
    case '[object Symbol]': 
      return 'symbol';

    default: return value;
  }
}

/**
 * @description 返回滚动条滚动距离
 */ 
const getScrollOffset = function() {
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
const getViewportSize = function() {
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
 * @description 判断值是否为对象
 * @param {Object} obj
 */ 
const isObject = function(obj) {
  if(typeof obj === 'object' && obj != null) {
    if(obj instanceof Array) {
      return false
    }
    return true
  }
  return false
};

/**
 * @description 判断值是否为数组
 * @param {Array} arr
 */ 
const isArray = function(arr) {
  return arr instanceof Array
};

/**
 * @description 判断两个值是否绝对相等，数组/对象只比较其属性值是否绝对相等
 * @param {Any} val1
 * @param {Any} val2
 */ 
const isEqual = function(val1, val2) {
  const isObject1 = (typeof val1 === 'object' && val1 != null)
  const isObject2 = (typeof val2 === 'object' && val2 != null)

  if(!isObject1 || !isObject2) {
    return val1 === val2
  }

  if(val1 === val2) {
      return true
  }

  const val1Keys = Object.keys(val1)
  const val2Keys = Object.keys(val2)
  if(val1Keys.length !== val2Keys.length) {
      return false
  }

  for(let key in val1) {
      const result = this.isEqual(val1[key], val2[key])
      if(!result) {
        return false
      }
  }
  
  return true
};

/**
 * @description 判断值是否合法，合法返回 true
 * @param {Any} value
 */ 
const isYummy = function(value) {
  if(value === undefined 
    || value == null 
    || value === '' 
    || value === false
  ) {
    return false
  }
  
  else if(value instanceof Array) {
    if(value.length === 0) {
      return false
    }
  }
  
  else if(typeof value === 'object') {
    var keys = Object.keys(value)
    if(keys.length === 0) {
      return false
    }
  }
  
  return true
};

/**
 * @description 判断值是否合法，不合法返回 true
 * @param {Any} value
 */ 
const isLousy = function(value) {
  return !isYummy(value)
};

/**
 * @description 返回匹配元素，否则返回 undefined
 * @param {Object[]} collection
 * @param {Array|Object|String} predicate
 */ 
const find = function(collection, predicate) {
  if(isArray(predicate)) {
    const [key, val] = predicate
    for(let item of collection) {
      if(item[key] === val) {
        return item
      }
    }
  }
  else if(isObject(predicate)) {
    for(let item of collection) {

      const variety = Object.entries(predicate)

      const result = variety.every((v) => {
        const [key, val] = v
        return item[key] === val
      }) 

      if(result) {
        return item
      }

    }
  }
  else {
    for(let item of collection) {
      for(let key in item) {
        if(item[key] === predicate) {
          return item
        }
      }
    }
  }
};

/**
 * @description 深拷贝
 * @param {Any} value
 */ 
const deepClone = function(value = {}) {
  if(typeof value !== 'object' || value == null) {
    return value
  }

  const result = (value instanceof Array) ? [] : {}

  for(let key in value) {
    if(value.hasOwnProperty(key)) {
      result[key] = deepClone(value[key])
    }
  }

  return result
};

/**
 * @description 数组去重
 * @param {Any[]} value
 */ 
const cleanArray = function(value = []) {
  if(!Array.isArray(value)) {
    return value
  }

  const result = []

  for(let val of value) {
    // val 为值类型
    if(~valueType.indexOf(typeof val)) {
      if(!result.includes(val)) {
        result.push(val)
      }
    }
    // val 为引用类型
    else if(~referenceType.indexOf(typeof val)) {
      if(!result.length) {
        result.push(val)
      }
      else {
        const existed = result.some(unique => JSON.stringify(unique) === JSON.stringify(val))

        if(!existed) {
          result.push(val)
        }
      }
    }
  }

  return result
};

/**
 * @description 数组拍平
 * @param {Any[]} value
 */ 
const flatArray = function(value = []) {
  const isDeep = value.some(item => item instanceof Array)

  if(!isDeep) {        
    return value
  }

  const result = Array.prototype.concat.apply([], value)
  
  return flatArray(result)
};

const get = function(object, path, defaultValue) {
  // 判断 object 是否是数组或者对象，否则直接返回默认值 defaultValue
  if (typeof object !== 'object') 
    return defaultValue

  // 沿着路径寻找到对应的值，未找到则返回默认值 defaultValue
  return _basePath(path).reduce((o, k) => (o || {})[k], object) || defaultValue
};

// 处理 path， path有三种形式：'a[0].b.c'、'a.0.b.c' 和 ['a','0','b','c']，需要统一处理成数组，便于后续使用
const _basePath = function(path) {
  // 若是数组，则直接返回
  if (Array.isArray(path)) 
    return path

  // 若有 '[',']'，则替换成将 '[' 替换成 '.',去掉 ']'
  return path.replace(/\[/g, '.').replace(/\]/g, '').split('.')
};

const set =  function(object, path, value) {
  if (typeof object !== 'object') 
    return object

  _basePath(path).reduce((o, k, i, _) => {
      if (i === _.length - 1) { // 若遍历结束直接赋值
          o[k] = value
          return null
      } else if (k in o) { // 若存在对应路径，则返回找到的对象，进行下一次遍历
          return o[k]
      } else { // 若不存在对应路径，则创建对应对象，若下一路径是数字，新对象赋值为空数组，否则赋值为空对象
          o[k] = /^[0-9]{1,}$/.test(_[i + 1]) ? [] : {}
          return o[k]
      }
  }, object)

  return object
};

/**
 * @description 复制到剪贴板
 * @param {String} text
 */ 
// const copyToClipboard = function(text) {
//   return navigator.clipboard.writeText(text)
// };

export {
  getType,
  getScrollOffset,
  getViewportSize,

  isObject,
  isArray,
  isEqual,
  isLousy,
  isYummy,

  find,
  deepClone,
  cleanArray,
  flatArray,

  get,
  set,

  // copyToClipboard,

  rules
}

export default {
  getType,
  getScrollOffset,
  getViewportSize,

  isObject,
  isArray,
  isEqual,
  isLousy,
  isYummy,

  find,
  deepClone,
  cleanArray,
  flatArray,

  get,
  set,

  // copyToClipboard,

  rules
}