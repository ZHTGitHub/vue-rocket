/**
 * @description 返回值的数据类型
 * @param {Any} value
 */ 
export const getType = function(value) {
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
 * @description 判断值是否为数组
 * @param {Array} arr
 */ 
export const isArray = function(arr) {
  return arr instanceof Array
};

/**
 * @description 判断值是否为对象
 * @param {Object} obj
 */ 
export const isObject = function(obj) {
  if(typeof obj === 'object' && obj != null) {
    if(obj instanceof Array) {
      return false
    }
    return true
  }
  return false
};

/**
 * @description 判断两个值是否绝对相等，数组/对象只比较其属性值是否绝对相等
 * @param {Any} val1
 * @param {Any} val2
 */ 
export const isEqual = function(val1, val2) {
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
export const isYummy = function(value) {
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
 * @description 判断值是否不合法，不合法返回 true
 * @param {Any} value
 */ 
export const isLousy = function(value) {
  return !isYummy(value)
};