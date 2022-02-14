<template>
  <div class="usage-examples">
    <usage-demo :code="code">
      <div slot="demo">
        <z-pagination
          :options="pageOptions"
          :pageNum="1"
          :pageSize="1"
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

  const code = 
`
<z-pagination
  :options="pageOptions"
  :pageNum="3"
  :pageSize="10"
  :total="total"
></z-pagination>
`

  export default {
    name: 'UsageExamples',

    data() {  
      return {
        code,
        total: 2,
        pageOptions: [
          { label: '10条/页', value: 1 },
          // { label: '20条/页', value: 20 },
          // { label: '50条/页', value: 50 },
          // { label: '100条/页', value: 100 }
        ]
      }
    },

    mounted() {
      Prism.highlightAll()
    }
  }
</script>