import rules from '../validate/rules'

// 值类型
const valueType = ['undefined', 'number', 'string', 'boolean', 'symbol'];

// 引用类型
const referenceType = ['object', 'function'];

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
  }else {
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

export {
  isObject,
  isArray,
  isEqual,
  isLousy,
  isYummy,

  find,
  deepClone,
  cleanArray,
  flatArray,

  rules
}

export default {
  isObject,
  isArray,
  isEqual,
  isLousy,
  isYummy,

  find,
  deepClone,
  cleanArray,
  flatArray,

  rules
}