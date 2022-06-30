<template>
  <div class="session-storage">
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

  import cells from './cells'

  export default {
    name: 'SessionStorage',

    data() {
      return {
        cells
      }
    },

    mounted() {
      Prism.highlightAll()
    }
  }
</script>

<style scoped lang="scss">
  @import "../style.scss";
</style>