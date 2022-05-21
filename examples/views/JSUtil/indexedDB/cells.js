const rules = [
  {
    name: 'open(tableName, info)',
    intr: '打开数据库.',
    params: [
      { text: 'tableName (String): 表名.' },
      { text: 'info ({ autoIncrement, keyPath }): autoIncrement(boolean类型，键生成器，是否自动生成，默认false)；keyPath(指定键路径，需要唯一，可以不指定).' }
    ]
  },

  {
    name: 'add(tableName, data)',
    intr: '新增数据.',
    params: [
      { text: 'tableName (String): 表名.' },
      { text: 'data (Any): 任意值.' }
    ]
  },

  {
    name: 'put(tableName, data)',
    intr: '更新数据.',
    params: [
      { text: 'tableName (*): 表名.' },
      { text: 'data (Any): 任意值.' }
    ]
  },

  {
    name: 'get(tableName, keyPath, indexObj)',
    intr: '读取数据.',
    params: [
      { text: 'tableName (String): 表名.' },
      { text: 'keyPath (String): 主键.' },
      { text: 'indexObj (Object): 索引.' }
    ]
  },

  {
    name: 'getAll(tableName)',
    intr: '读取所有数据.',
    params: [
      { text: 'tableName (String): 表名.' }
    ]
  },

  {
    name: 'remove(tableName, keyPath)',
    intr: '删除数据.',
    params: [
      { text: 'tableName (String): 表名.' },
      { text: 'keyPath (String): 主键.' }
    ]
  },

  {
    name: 'clear(tableName)',
    intr: '清空数据库.',
    params: [
      { text: 'tableName (String): 表名.' }
    ]
  }
]

export default {
  rules
}