import { isArray, isObject } from './types'

// 值类型
const valueType = ['undefined', 'number', 'string', 'boolean', 'symbol'];

// 引用类型
const referenceType = ['object', 'function'];

/**
 * @description 深拷贝
 * @param {Any} value
 */ 
export const deepClone = function(value = {}) {
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
 * @description 返回匹配元素，否则返回 undefined
 * @param {Object[]} collection
 * @param {Array|Object|String} predicate
 * @param {Object} deepClone
 */ 
export const find = function(collection, predicate, deepClone = false) {
  // predicate 为数组
  if(isArray(predicate)) {
    const [key, val] = predicate

    for(let item of collection) {
      if(item[key] === val) {
        return item
      }
    }
  }
  // predicate 为对象
  else if(isObject(predicate)) {
    const entries = Object.entries(predicate)
    
    for(let item of collection) {
      const result = entries.every((entry) => {
        const [key, val] = entry

        return item[key] === val
      }) 

      if(result) {
        return item
      }
    }
  }
  // predicate 不为数组/对象
  else {
    for(let item of collection) {

      if(typeof item === 'object') {
        for(let key in item) {
          if(item[key] === predicate) {
            return item
          }
        }
      }
      else {
        if(item === predicate) {
          return item
        }
      }
    }
  }
};

/**
 * @description 返回匹配元素的下标，否则返回 -1
 * @param {Object[]} collection
 * @param {Array|Object|String} predicate
 */ 
export const findIndex = function(collection, predicate) { 
  // predicate 为数组
  if(isArray(predicate)) {
    const [key, val] = predicate

    for(let index in collection) {
      if(collection[index][key] === val) {
        return +index
      }
    }
  }
  // predicate 为对象
  else if(isObject(predicate)) {
    const entries = Object.entries(predicate)

    for(let index in collection) {
      const result = entries.every((entry) => {
        const [key, val] = entry

        return collection[index][key] === val
      }) 

      if(result) {
        return +index
      }
    }
  }
  // predicate 不为数组/对象
  else {
    for(let index in collection) {
      const item = collection[index]

      if(typeof item === 'object') {
        for(let key in item) {
          if(item[key] === predicate) {
            return +index
          }
        }
      }
      else {
        if(item === predicate) {
          return +index
        }
      }
    }
  }

  return -1
};

/**
 * @description 数组拍平
 * @param {Any[]} value
 * @param {Boolean} deepClone
 */ 
 export const flatArray = function(value = [], deepClone = false) {
  const isDeep = value.some(item => item instanceof Array)

  if(!isDeep) {        
    return value
  }

  const result = Array.prototype.concat.apply([], value)
  
  return flatArray(result)
};

/**
 * @description 数组去重
 * @param {Any[]} value
 * @param {Boolean} deepClone
 */ 
 export const removeDuplicate = function(value = [], deepClone = false) {
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