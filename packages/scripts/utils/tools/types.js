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
};

/**
 * @description 判读是否为布尔值
 * @param {Any} value
 */ 
export const isBoolean = function(value) {
  return getType(value) === 'boolean'
};

/**
 * @description 判读是否为数值
 * @param {Any} value
 */ 
export const isNumber = function(value) {
  return getType(value) === 'number'
};

/**
 * @description 判断是否为数组
 * @param {Any} value
 */ 
export const isArray = function(value) {
  return value instanceof Array
};

/**
 * @description 判断是否为函数
 * @param {Any} value
 */ 
export const isFunction = function(value) {
  return getType(value) === 'function'
};

/**
 * @description 判断是否为对象
 * @param {Any} value
 */ 
export const isObject = function(value) {
  return getType(value) === 'object'
};

/**
 * @description 判断是否为null
 * @param {Any} value
 */ 
export const isNull = function(value) {
  return getType(value) === 'null'
};

/**
 * @description 判断是否为undefined
 * @param {Any} value
 */ 
export const isUndefined = function(value) {
  return getType(value) === 'undefined'
};

/**
 * @description 判断是否为symbol
 * @param {Any} value
 */ 
export const isSymbol = function(value) {
  return getType(value) === 'symbol'
};