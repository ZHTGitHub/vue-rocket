class IndexedDB {
  constructor(dbName, version = 1) {
    this.localDB = 
      window.indexedDB || 
      window.mozIndexedDB || 
      window.webkitIndexedDB || 
      window.msIndexedDB ||
      window.shimIndexedDB;
    
    if(!this.localDB) {
      alert('你的浏览器不支持IndexedDB')
    }

    this.dbName = dbName
    this.version = version

    this.db = null
    this.transaction = null
  }

  // 打开数据库
  open(tableName, {
    autoIncrement,
    keyPath
  }) {
    return new Promise(resolve => {
      const request = indexedDB.open(this.dbName, this.version)

      // 数据库升级成功
      request.onupgradeneeded = (event) => {
        this.db = event.target.result
        this.transaction = event.target.transaction

        // console.log(this.transaction)

        if(!this.db.objectStoreNames.contains(tableName)) {
          // 主键
          this.db.createObjectStore(tableName, { 
            autoIncrement,
            keyPath
          })

          resolve({
            code: 200,
            status: 'upgrade',
            error: event.target.error
          })
        }
      }

      // 数据库打开成功
      request.onsuccess = (event) => {
        this.db = event.target.result
        this.transaction = event.target.transaction

        // console.log(this.transaction)

        resolve({
          code: 200,
          status: 'opened',
          error: event.target.error
        })
      }

      // 数据库打开报错
      request.onerror = (event) => {
        resolve({
          code: 400,
          status: 'open_failed',
          error: event.target.error
        })
      }
    })
  }

  // 新增
  add(tableName, data) {
    return new Promise(resolve => {
      const transaction = this.transaction ? this.transaction : this.db.transaction([tableName], 'readwrite')
      const request = transaction
        .objectStore(tableName)
        .add(data)

      // 数据写入成功
      request.onsuccess = (event) => {
        resolve({
          code: 200,
          status: 'added',
          error: event.target.error
        })
      }

      // 数据写入失败
      request.onerror = (event) => {
        resolve({
          code: 400,
          status: 'add_failed',
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
      const transaction = this.transaction ? this.transaction : this.db.transaction([tableName], 'readwrite')
      const request = transaction
        .objectStore(tableName)
        .put(data)

      // 数据更新成功
      request.onsuccess = (event) => {
        resolve({
          code: 200,
          status: 'put',
          error: event.target.error
        })
      }

      // 数据更新失败
      request.onerror = (event) => {
        resolve({
          code: 400,
          status: 'put_failed',
          error: event.target.error
        })
      }
    })
  }

  // 读取
  get(tableName, keyPath) {
    return new Promise(resolve => {
      const transaction = this.transaction ? this.transaction : this.db.transaction([tableName])
      const objectStore = transaction.objectStore(tableName)
      const request = objectStore.get(keyPath)

      // 成功
      request.onsuccess = (event) => {
        resolve({
          code: 200,
          status: 'got',
          error: event.target.error,
          data: request.result
        })
      }

      // 失败
      request.onerror = (event) => {
        resolve({
          code: 400,
          status: 'get_failed',
          error: event.target.error
        })
      }
    })
  }

  // 读取所有（开发中...）
  getAll(tableName) {
    return new Promise(resolve => {
      const transaction = this.transaction ? this.transaction : this.db.transaction([tableName])
      const objectStore = transaction.objectStore(tableName)
      
      objectStore.openCursor().onsuccess = function(event) {
        const result = event.target.result

        console.log(event)

        resolve({
          code: 200,
          status: 'got_all',
          error: event.target.error,
          data: result.continue()
        })
      }
    }) 
  }

  // 删除
  remove(tableName, keyPath) {
    return new Promise(resolve => {
      const transaction = this.transaction ? this.transaction : this.db.transaction([tableName], 'readwrite')
      const request = transaction
        .objectStore(tableName)
        .delete(keyPath)

      // 数据删除成功
      request.onsuccess = (event) => {
        resolve({
          code: 200,
          status: 'removed',
          error: event.target.error,
          data: request.result
        })
      }
    })
  }

  // 清空
  clear(tableName) {
    return new Promise(resolve => {
      const transaction = this.transaction ? this.transaction : this.db.transaction([tableName], 'readwrite')
      const request = transaction
        .objectStore(tableName)
        .clear()

      // 数据清除成功
      request.onsuccess = (event) => {
        resolve({
          code: 200,
          status: 'cleared',
          error: event.target.error,
          data: request.result
        })
      }
    })
  }
}

export default IndexedDB