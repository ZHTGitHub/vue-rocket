<template>
  <div class="indexed-db">
    <typing-title :title="$route.meta.title"></typing-title>

    <div 
      class="rule" 
      v-for="(item, index) in cells.rules"
      :key="`rules_${ index }`"
    >
      <h6 class="text-h5">{{ item.name }}</h6>
      <p>{{ item.intr }}</p>

      <h5 class="fw-black">参数</h5>

      <p 
        v-for="(item, index) in item.params"
        :key="index"
        class="ma-0 pa-0"
      >{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
  import cells from './cells'
  import IndexedDB from '../../../../packages/scripts/utils/storage/indexedDB'

  export default {
    name: 'IndexedDB',
    
    data() {
      return {
        cells
      }
    },

    async created() {
      const tableName = 'zhongshan_university'

      const indexedDB = new IndexedDB('School')
      const open_result = await indexedDB.open(
        tableName, 
        { keyPath: 'id' },
        [{ name: 'name', keyPath: 'name', options: { unique: false } }]
      )
      console.log(open_result)

      const add_result = await indexedDB.add(tableName, {
        id: '001',
        name: '国立中山大学',
      })
      console.log(add_result)

      // const put_result = await indexedDB.put(tableName, {
      //   id: '002',
      //   name: '华南师范大学'
      // })
      // console.log(put_result)

      // const remove_result = await indexedDB.remove(tableName, '003')
      // console.log(remove_result)

      // const clear_result = await indexedDB.clear(tableName)
      // console.log(clear_result)

      const get_result = await indexedDB.get(tableName, null, { name: '国立中山大学' })
      console.log(get_result)

      // const getAll_result = await indexedDB.getAll(tableName)
      // console.log(getAll_result)
    }
  }
</script>

<style scoped lang="scss">
  @import "../style.scss";
</style>