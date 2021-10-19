<template>
  <div class="usage-examples">
    <usage-demo>
      <div slot="code">
        <pre class="line-numbers">
          <code class="language-markup">
            &lt;template>
              &lt;z-pagination
                :total="2"
              >&lt;/z-pagination>
            &lt;/template>
          </code>
        </pre>
      </div>
      <div slot="demo">
        <z-pagination
          :total="total"
        ></z-pagination>
      </div>
    </usage-demo>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.js'

  export default {
    name: 'UsageExamples',

    data() {  
      return {
        total: 0
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    created() {
      setTimeout(() => {
        this.total = 11
      }) 
    }
  }
</script>