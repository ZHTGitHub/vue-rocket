<template>
  <div class="form-rules">
    <typing-title :title="$route.meta.title"></typing-title>

    <div 
      class="rule" 
      v-for="(item, index) in cells.rules"
      :key="`rules_${ index }`"
    >
      <h6 class="text-h5">{{ item.rule }}</h6>
      <p>{{ item.usage }}</p>
      <pre class="rounded-md line-numbers"><code class="language-markup">{{ item.validation }}</code></pre>
    </div>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-tomorrow.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.js'

  import cells from './cells'

  export default {
    name: 'FormRules',

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
  .rule {
    margin-bottom: 52px;
    h6 {
      padding-bottom: 4px;
      border-bottom: 1px solid rgba($color: #000000, $alpha: .12);
    }

    p {
      padding: 20px 0;
      margin: 0;
    }
  }
</style>