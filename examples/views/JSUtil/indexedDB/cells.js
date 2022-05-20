const rules = [
  {
    name: 'open(tableName, info)',
    intr: '打开数据库.',
    params: [
      { text: 'tableName (*): 表名.' },
      { text: 'info (*): { autoIncrement, keyPath }.' }
    ]
  },

  {
    name: 'add(tableName, data)',
    intr: '新增数据.',
    params: [
      { text: 'tableName (*): 表名.' },
      { text: 'data (*): Any.' }
    ]
  },

  {
    name: 'put(tableName, data)',
    intr: '更新数据.',
    params: [
      { text: 'tableName (*): 表名.' },
      { text: 'data (*): Any.' }
    ]
  },

  {
    name: 'get(tableName, keyPath)',
    intr: '读取数据.',
    params: [
      { text: 'tableName (*): 表名.' },
      { text: 'keyPath (*): keyPath.' }
    ]
  },

  {
    name: 'remove(tableName, keyPath)',
    intr: '删除数据.',
    params: [
      { text: 'tableName (*): 表名.' },
      { text: 'keyPath (*): keyPath.' }
    ]
  },

  {
    name: 'clear(tableName)',
    intr: '清空数据库.',
    params: [
      { text: 'tableName (*): 表名.' }
    ]
  }
]

export default {
  rules
}