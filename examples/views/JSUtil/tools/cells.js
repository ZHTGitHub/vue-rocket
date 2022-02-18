const rules = [
  {
    name: 'isObject(value)',
    intr: '判断值是否为对象',
    params: [
      { text: '任意值.' }
    ]
  },

  {
    name: 'isArray(value)',
    intr: '判断值是否为数组',
    params: [
      { text: '任意值.' }
    ]
  },

  {
    name: 'isEqual(value, other)',
    intr: '判断两个值是否绝对相等，数组/对象只比较其属性值是否绝对相等',
    params: [
      { text: 'value (*): 用来比较的值.' },
      { text: 'other (*): 另一个用来比较的值.' }
    ]
  },

  {
    name: 'isYummy(value)',
    intr: '判断值是否合法，值为 undefined | null | "" | false | [] | {} 不合法返回 false，其余值(包含数字 0)均合法返回 true',
    params: [
      { text: '任意值.' }
    ]
  },

  {
    name: 'isLousy(value)',
    intr: '判断值是否合法，值为 undefined | null | "" | false | [] | {} 不合法返回 true，其余值(包含数字 0)均合法返回 false',
    params: [
      { text: '任意值.' }
    ]
  },

  {
    name: 'find(collection, predicate)',
    intr: '遍历 collection 集合，返回与 predicate 匹配的第一个元素，否则返回 undefined',
    params: [
      { text: 'collection (Object[]): 一个用来迭代的集合' },
      { text: 'predicate (Array|Object|String): 匹配的条件' }
    ]
  },

  {
    name: 'deepClone(value)',
    intr: '深拷贝，若value不为对象或数组，返回value',
    params: [
      { text: '任意值' }
    ]
  },

  {
    name: 'cleanArray(value)',
    intr: '数组去重，若value不为数组，返回value',
    params: [
      { text: '任意值' }
    ]
  },

  {
    name: 'flatArray(value)',
    intr: '数组拍平，若value不为数组，返回value',
    params: [
      { text: '任意值' }
    ]
  },
]

export default {
  rules
}