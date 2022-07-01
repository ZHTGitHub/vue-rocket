const rules = [
  {
    name: 'getType(value)',
    intr: '返回值的数据类型，返回 boolean / NaN / number / string / array / function / object / null / undefined / symbol.',
    params: [
      { text: '任意值.' }
    ]
  },

  {
    name: 'getScrollOffset()',
    intr: '返回滚动条滚动距离，返回 { x: "横向滚动距离", y: "纵向滚动距离" }.',
    params: [
      { text: '无.' }
    ]
  },

  {
    name: 'getViewportSize()',
    intr: '返回视口尺寸，返回 { width: "适口的宽", height: "适口的高" }.',
    params: [
      { text: '无.' }
    ]
  },

  {
    name: 'isObject(value)',
    intr: '判断值是否为对象，返回 true 或 false.',
    params: [
      { text: '任意值.' }
    ]
  },

  {
    name: 'isArray(value)',
    intr: '判断值是否为数组，返回 true 或 false.',
    params: [
      { text: '任意值.' }
    ]
  },

  {
    name: 'isEqual(value, other)',
    intr: '判断两个值是否绝对相等，数组/对象只比较其属性值是否绝对相等，返回 true 或 false.',
    params: [
      { text: 'value (*): 用来比较的值.' },
      { text: 'other (*): 另一个用来比较的值.' }
    ]
  },

  {
    name: 'isYummy(value)',
    intr: '判断值是否合法，值为 undefined | null | "" | false | [] | {} 不合法返回 false，其余值(包含数字 0)均合法返回 true.',
    params: [
      { text: '任意值.' }
    ]
  },

  {
    name: 'isLousy(value)',
    intr: '判断值是否不合法，值为 undefined | null | "" | false | [] | {} 不合法返回 true，其余值(包含数字 0)均合法返回 false.',
    params: [
      { text: '任意值.' }
    ]
  },

  {
    name: 'find(collection, predicate)',
    intr: '遍历 collection 集合，返回与 predicate 匹配的第一个元素，否则返回 undefined.',
    params: [
      { text: 'collection (Object[]): 一个用来迭代的集合' },
      { text: 'predicate (Any): 匹配的条件' }
    ]
  },

  {
    name: 'findIndex(collection, predicate)',
    intr: '遍历 collection 集合，返回与 predicate 匹配的第一个元素，否则返回 -1.',
    params: [
      { text: 'collection (Object[]): 一个用来迭代的集合' },
      { text: 'predicate (Any): 匹配的条件' }
    ]
  },

  {
    name: 'deepClone(value)',
    intr: '深拷贝，若value不为对象或数组，返回value.',
    params: [
      { text: '任意值' }
    ]
  },

  {
    name: 'removeDuplicate(value)',
    intr: '数组去重，若value不为数组，返回value.',
    params: [
      { text: '任意值' }
    ]
  },

  {
    name: 'flatArray(value)',
    intr: '数组拍平，若value不为数组，返回value.',
    params: [
      { text: '任意值' }
    ]
  },
]

export default {
  rules
}