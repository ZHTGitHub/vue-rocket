import { deepClone, find, flatArray, removeDuplicate } from './arrayObject'
import { getScrollOffset, getViewportSize, queryToObject } from './browser'
import { get, set } from './lodash'
import { getType, isArray, isObject, isEqual, isYummy, isLousy } from './messy'

export default {
  deepClone, 
  find, 
  flatArray, 
  removeDuplicate,

  getScrollOffset, 
  getViewportSize, 
  queryToObject,

  get, 
  set,
  
  getType, 
  isArray, 
  isObject, 
  isEqual, 
  isYummy, 
  isLousy
}
