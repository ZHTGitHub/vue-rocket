<template>
  <div class="local-storage">
    <typing-title :title="$route.meta.title"></typing-title>

    <div>
      <p class="text-black">导入</p>
      <pre><code class="language-javascript" v-text="cells.importCode"></code></pre>
    </div>

    <div class="mt-12">
      <h6 class="text-h5">set(key, value)</h6>
      <pre><code class="language-javascript" v-text="cells.setCode"></code></pre>
    </div>

    <div class="mt-12">
      <h6 class="text-h5">get(key)</h6>
      <pre><code class="language-javascript" v-text="cells.getCode"></code></pre>
    </div>

    <div class="mt-12">
      <h6 class="text-h5">delete(key)</h6>
      <pre><code class="language-javascript" v-text="cells.deleteCode"></code></pre>
    </div>

    <div class="mt-12">
      <h6 class="text-h5">clear()</h6>
      <pre><code class="language-javascript" v-text="cells.clearCode"></code></pre>
    </div>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.min.css'

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

    mounted() {
      Prism.highlightAll()
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