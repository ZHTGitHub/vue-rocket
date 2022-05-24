class IndexedDB {
  constructor(dbName, version = 1) {
    this.localDB = 
      window.indexedDB || 
      window.mozIndexedDB || 
      window.webkitIndexedDB || 
      window.msIndexedDB ||
      window.shimIndexedDB
    
    if(!this.localDB) {
      alert('你的浏览器不支持IndexedDB')
    }

    this.dbName = dbName
    this.version = version

    this.db = null
    this.transaction = null
  }

  // 打开数据库
  open(tableName, { autoIncrement, keyPath }, indexes) {
    return new Promise(resolve => {
      const request = indexedDB.open(this.dbName, this.version)
      
      // 数据库升级成功
      request.onupgradeneeded = (event) => {
        this.db = request.result
        this.transaction = request.transaction

        if(!this.db.objectStoreNames.contains(tableName)) {
          // 主键
          const objectStore = this.db.createObjectStore(tableName, { 
            autoIncrement,
            keyPath
          })

          // 索引
          indexes?.map(index => {
            objectStore.createIndex(index.name, index.keyPath, index.options)
          })

          if(event.target.error === null) {
            this.open(tableName, { autoIncrement, keyPath }, indexes)
          }
        }
      }

      // 数据库打开成功
      request.onsuccess = (event) => {
        this.db = request.result
        this.transaction = request.transaction

        resolve({
          code: 200,
          error: event.target.error
        })
      }

      // 数据库打开报错
      request.onerror = (event) => {
        resolve({
          code: 500,
          error: event.target.error
        })
      }
    })
  }

  // 新增
  add(tableName, data) {
    return new Promise(resolve => {
      const request = this.transaction ? this.transaction : this.db.transaction([tableName], 'readwrite')
        .objectStore(tableName)
        .add(data)

      // 数据写入成功
      request.onsuccess = (event) => {
        resolve({
          code: 200,
          error: event.target.error
        })
      }

      // 数据写入失败
      request.onerror = (event) => {
        resolve({
          code: 500,
          error: event.target.error
        })
      }

      request.onabort = function(event) {
        console.log('事务回滚')
      }
    })
  }

  // 更新
  put(tableName, data) {
    return new Promise(resolve => {
      const request = this.transaction ? this.transaction : this.db.transaction([tableName], 'readwrite')
        .objectStore(tableName)
        .put(data)

      // 数据更新成功
      request.onsuccess = (event) => {
        resolve({
          code: 200,
          error: event.target.error
        })
      }

      // 数据更新失败
      request.onerror = (event) => {
        resolve({
          code: 500,
          error: event.target.error
        })
      }
    })
  }

  // 读取
  get(tableName, keyPath, indexObj) {
    return new Promise(resolve => {
      const transaction = this.transaction ? this.transaction : this.db.transaction([tableName], 'readonly')
      const objectStore = transaction.objectStore(tableName)

      let request = null

      if(keyPath) {
        request = objectStore.get(keyPath)
      }
      else {
        const [key, value] = Object.entries(indexObj)[0]
        const index = objectStore.index(key)
        request = index.get(value)
      }

      // 成功
      request.onsuccess = (event) => {
        const data = request.result

        resolve({
          code: data === undefined ? 400 : 200,
          data,
          error: event.target.error
        })
      }

      // 失败
      request.onerror = (event) => {
        resolve({
          code: 500,
          error: event.target.error
        })
      }
    })
  }

  // 读取所有
  getAll(tableName) {
    return new Promise(resolve => {
      const transaction = this.transaction ? this.transaction : this.db.transaction(tableName)
      const objectStore = transaction.objectStore(tableName)
      const openCursor = objectStore.openCursor()

      const data = []
      
      openCursor.onsuccess = function(event) {
        const cursor = event.target.result

        if(cursor) {
          data.push(cursor.value)
          cursor.continue()
        }
        else {
          resolve({
            code: data.length === 0 ? 400 : 200,
            data,
            error: event.target.error
          })
        }
      }
    }) 
  }

  // 删除
  remove(tableName, keyPath) {
    return new Promise(resolve => {
      const request = this.transaction ? this.transaction : this.db.transaction([tableName], 'readwrite')
        .objectStore(tableName)
        .delete(keyPath)

      // 数据删除成功
      request.onsuccess = (event) => {
        resolve({
          code: 200,
          data: request.result,
          error: event.target.error
        })
      }
    })
  }

  // 清空
  clear(tableName) {
    return new Promise(resolve => {
      const request = this.transaction ? this.transaction : this.db.transaction([tableName], 'readwrite')
        .objectStore(tableName)
        .clear()

      // 数据清除成功
      request.onsuccess = (event) => {
        resolve({
          code: 200,
          data: request.result,
          error: event.target.error
        })
      }
    })
  }
}

export default IndexedDB