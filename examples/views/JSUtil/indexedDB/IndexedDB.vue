<template>
  <div class="indexed-db">
    
  </div>
</template>

<script>
  import IndexedDB from '../../../../packages/scripts/storage/indexedDB'

  export default {
    name: 'IndexedDB',
    
    data() {
      return {

      }
    },

    async created() {
      const tableName = 'zhongshan_university'

      const indexedDB = new IndexedDB('School')
      const open_result = await indexedDB.open(tableName, {
        keyPath: 'id'
      })
      console.log(open_result)

      const add_result = await indexedDB.add(tableName, {
        id: '001',
        name: '国立中山大学',
      })
      console.log(add_result)

      const get_result = await indexedDB.get(tableName, '001')
      console.log(get_result)

      // const put_result = await indexedDB.put(tableName, {
      //   id: '003',
      //   name: '国立中山大学_003'
      // })
      // console.log(put_result)

      // const remove_result = await indexedDB.remove(tableName, '003')
      // console.log(remove_result)

      // const clear_result = await indexedDB.clear(tableName)
      // console.log(clear_result)
    }
  }
</script>