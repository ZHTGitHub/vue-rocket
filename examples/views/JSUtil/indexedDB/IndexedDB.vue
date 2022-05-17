<template>
  <div class="indexed-db">
    
  </div>
</template>

<script>
  import LocalDB from '../../../../packages/scripts/storage/indexedDB'

  export default {
    name: 'IndexedDB',
    
    data() {
      return {

      }
    },

    async created() {
      const localDB = new LocalDB('Students')
      const result = await localDB.open('levels')
      console.log(result)

      await localDB.add('levels', {
        id: '1',
        level: 1,
        total: 45,
        male: 22,
        female: 23
      })

      const added = await localDB.add('levels', {
        id: '2',
        level: 2,
        total: 46,
        male: 20,
        female: 20
      })

      console.log(added)

      const got = await localDB.get({ tableName: 'levels' })

      console.log(got)
    }
  }
</script>