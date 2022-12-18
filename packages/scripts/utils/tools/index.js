import { deepClone, find, findIndex, flatArray, removeDuplicate } from './arrayObject'
import { getScrollOffset, getViewportSize, queryToObject } from './browser'
import { get, set } from './lodash'
import { isEqual, isYummy, isLousy } from './messy'
import { getType, isBoolean, isNumber, isString, isArray, isFunction, isObject, isNull, isUndefined, isSymbol } from './types'

import image from './image'

export default {
  deepClone, 
  find, 
  findIndex,
  flatArray, 
  removeDuplicate,

  getScrollOffset, 
  getViewportSize, 
  queryToObject,

  get, 
  set,
  
  isEqual, 
  isYummy, 
  isLousy,

  getType, 
  isBoolean,
  isNumber,
  isString,
  isArray,
  isFunction,
  isObject,
  isNull,
  isUndefined,
  isSymbol,

  image
}
