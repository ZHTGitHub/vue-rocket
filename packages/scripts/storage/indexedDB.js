class LocalDB {
  constructor(dbName, version = 1) {
    this.localDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
    
    if(!this.localDB) {
      alert('你的浏览器不支持IndexedDB')
    }

    this.dbName = dbName
    this.version = version

    this.db = null
  }

  init(tableName) {

  }

  // 打开数据库
  open(tableName) {
    return new Promise(resolve => {
      const open = indexedDB.open(this.dbName, this.version)

      // 建表
      open.onupgradeneeded = (event) => {
        this.db = event.target.result

        if(!this.db.objectStoreNames.contains(this.dbName)) {
          this.db.createObjectStore(tableName, { autoIncrement: true })

          resolve({
            code: 200,
            error: event.target.error
          })
        }
      }

      // 打开成功，记录连接对象
      open.onsuccess = (event) => {
        this.db = event.target.result

        resolve({
          code: 200,
          error: event.target.error
        })
      }

      // 打开失败
      open.onerror = (event) => {
        resolve({
          code: 400,
          error: event.target.error
        })
      }
    })
  }

  // 新增数据
  add(tableName, data) {
    return new Promise(resolve => {
      const transaction = this.db.transaction([tableName], 'readwrite').objectStore(tableName).add(data)

      // 成功
      transaction.onsuccess = (event) => {
        resolve({
          code: 200,
          error: event.target.error
        })
      }

      // 失败
      transaction.onerror = (event) => {
        resolve({
          code: 400,
          error: event.target.error
        })
      }
    })
  }

  put(tableName) {

  }

  // 读取数据
  get({ tableName, indexName }) {
    return new Promise(resolve => {
      const transaction = this.db.transaction([tableName], 'readwrite')
      const objectStore = transaction.objectStore(tableName)
      const response = objectStore.get(7)

      // 成功
      response.onsuccess = (event) => {
        resolve({
          code: 200,
          error: event.target.error,
          data: response.result
        })
      }

      // 失败
      response.onerror = (event) => {
        resolve({
          code: 400,
          error: event.target.error
        })
      }
    })
  }

  remove(tableName) {

  }
}

export default LocalDB