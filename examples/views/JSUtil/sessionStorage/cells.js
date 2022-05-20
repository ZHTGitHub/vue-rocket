const rules = [
  {
    name: 'set(key, value)',
    intr: '存储名为 key 的一个值 value，若 key 存在更新 value.',
    params: [
      { text: 'key (*): 任意值.' },
      { text: 'value (*): 任意值.' }
    ]
  },

  {
    name: 'get(key)',
    intr: '获取名称为 key 的值，若 key 不存在返回 null.',
    params: [
      { text: '任意值.' }
    ]
  },

  {
    name: 'del(key)',
    intr: '删除名称为 key 的信息，这个 key 对应的 value 也会被删除.',
    params: [
      { text: '任意值.' }
    ]
  },

  {
    name: 'clear()',
    intr: '清空 localStorage 中所有信息.',
    params: [
      { text: '无.' }
    ]
  },
]

export default {
  rules
}