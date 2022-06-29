<template>
  <div class="session-storage">
    <typing-title :title="$route.meta.title"></typing-title>

    <div class="mb-12">
      <p class="text-black">导入</p>
      <pre><code class="language-javascript">import { sessionStorage } from 'vue-rocket'</code></pre>
    </div>

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
        class="ma-0 pa-0"
      >{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.js'

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