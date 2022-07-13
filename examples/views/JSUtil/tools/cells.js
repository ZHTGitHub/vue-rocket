const getTypeCode = 
`/**
 * @description 返回值的数据类型(boolean / NaN / number / string / array / function / object / null / undefined / symbol)
 * @param value(Any)
 */ 
tools.getType(value)
`

const getScrollOffsetCode = 
`/**
 * @description 返回滚动条滚动距离({ x: "横向滚动距离", y: "纵向滚动距离" })
 */
tools.getScrollOffset()
`

const getViewportSizeCode = 
`/**
 * @description 返回视口尺寸({ width: "适口的宽", height: "适口的高" })
 */
tools.getViewportSize()
`

const isObjectCode = 
`/**
 * @description 判断值是否为对象(true / false)
 * @param value(Any)
 */ 
tools.isObject(value)
`

const isArrayCode = 
`/**
 * @description 判断值是否为数组(true / false)
 * @param value(Any)
 */ 
tools.isArray(value)
`

const isEqualCode = 
`/**
 * @description 判断两个值是否绝对相等，数组/对象只比较其属性值是否绝对相等(true / false)
 * @param value(Any) 用来比较的值
 * @param other(Any) 另一个用来比较的值
 */ 
tools.isEqual(value, other)
`

const isYummyCode = 
`/**
 * @description 判断值是否合法，值为 undefined | null | "" | false | [] | {} 不合法返回 false，其余值(包含数字 0)均合法返回 true
 * @param value(Any)
 */ 
tools.isYummy(value)
`

const isLousyCode = 
`/**
 * @description 判断值是否不合法，值为 undefined | null | "" | false | [] | {} 不合法返回 true，其余值(包含数字 0)均合法返回 false
 * @param value(Any)
 */ 
tools.isLousy(value)
`

const findCode = 
`/**
 * @description 返回 collection 中与 predicate 匹配的第一个元素，否则返回 undefined
 * @param collection(Object[]) 一个用来迭代的集合
 * @param predicate(Any) 匹配的条件
 */ 
tools.find(collection, predicate)
`

const findIndexCode = 
`/**
 * @description 返回 collection 中与 predicate 匹配的第一个元素，否则返回 -1
 * @param collection(Array) 一个用来迭代的集合
 * @param predicate(Any) 匹配的条件
 */ 
tools.findIndex(collection, predicate)
`

const deepCloneCode = 
`/**
 * @description 深拷贝，若 value 不为对象或数组，返回 value
 * @param value(Any)
 */ 
tools.deepClone(value)
`

const removeDuplicateCode = 
`/**
 * @description 数组去重，若 value 不为数组，返回 value
 * @param value(Any)
 */ 
tools.removeDuplicate(value)
`

const flatArrayCode = 
`/**
 * @description 数组拍平，若 value 不为数组，返回 value
 * @param value(Any)
 */ 
tools.flatArray(value)
`

export default {
  getTypeCode,
  getScrollOffsetCode,
  getViewportSizeCode,
  isObjectCode,
  isArrayCode,
  isEqualCode,
  isYummyCode,
  isLousyCode,
  findCode,
  findIndexCode,
  deepCloneCode,
  removeDuplicateCode,
  flatArrayCode
}