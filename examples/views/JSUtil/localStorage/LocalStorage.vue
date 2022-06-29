<template>
  <div class="local-storage">
    <typing-title :title="$route.meta.title"></typing-title>

    <div 
      class="rule" 
      v-for="(item, index) in cells.rules"
      :key="`rules_${ index }`"
    >
      <h6 class="text-h5">{{ item.name }}</h6>

      <p 
        v-for="(item, index) in item.intrs"
        :key="`intr_${ index }`"
        class="ma-0 pa-0 py-2"
      >{{ item.text }}</p>

      <h5 class="fw-black">参数</h5>

      <p 
        v-for="(item, index) in item.params"
        :key="`param_${ index }`"
        class="ma-0 pa-0 py-2"
      >{{ item.text }}</p>
    </div>

    <!-- <v-btn class="mr-2" @click="onDelete">delete</v-btn>
    <v-btn @click="onGet">get</v-btn> -->
  </div>
</template>

<script>
  import localStorage from '../../../../packages/scripts/utils/storage/localStorage'
  import cells from './cells'

  export default {
    name: 'LocalStorage',

    data() {
      return {
        cells
      }
    },

    created() {
      const obj = {}

      for(let i = 0; i < 100; i+=1) {
        obj[i] = i
      }

      localStorage.set(obj)

      localStorage.set({
        a: {val: 1, key: 'A'},
        b: {val: 2, key: 'B'}
      })
    },

    methods: {
      onDelete() {
        const arr = []
        for(let i = 0; i < 100; i+=1) {
          arr.push(i)
        }

        localStorage.delete(arr)
      },

      onGet() {
        console.log(localStorage.get(['a', 'b', 'c']))
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../style.scss";
</style>