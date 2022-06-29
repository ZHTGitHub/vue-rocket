<template>
  <div class="form-rules">
    <typing-title :title="$route.meta.title"></typing-title>

    <div class="mb-12">
      <p class="text-black">导入</p>
      <pre><code class="language-javascript">import { tools } from 'vue-rocket'</code></pre>
    </div>

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
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.js'

  import tools from '../../../../packages/scripts/utils/tools'
  import cells from './cells'

  export default {
    name: 'Tools',

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