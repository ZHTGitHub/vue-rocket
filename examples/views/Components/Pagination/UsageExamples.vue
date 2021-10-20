<template>
  <div class="usage-examples">
    <usage-demo>
      <div slot="code">
        <pre class="line-numbers">
          <code class="language-markup">
            &lt;template>
              &lt;z-pagination
                :optinos="pageSizes"
                :total="total"
              >&lt;/z-pagination>
            &lt;/template>
          </code>
        </pre>
      </div>
      <div slot="demo">
        <z-pagination
          :options="pageSizes"
          :total="total"
          @pagination="handlePagination"
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
        total: 101,
        pageSizes: [
          { label: '10条/页', value: 10 },
          { label: '20条/页', value: 20 },
          { label: '50条/页', value: 50 },
          { label: '100条/页', value: 100 }
        ]
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      handlePagination(pagination) {
        console.log(pagination)
      }
    }
  }
</script>