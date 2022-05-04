<template>
  <div class="usage-examples">
    <usage-demo :code="code">
      <div slot="demo">
        <div class="z-flex">
          <z-autocomplete
            formId="auto"
            formKey="auto"
            :options="cityOptions"
            @change="handleChange"
            @enter="handleEnter"
            @search="handleSearch"
          ></z-autocomplete>
        </div>
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
<z-autocomplete
  formId="auto"
  formKey="auto"
  :options="cityOptions"
  :defaultValue="1"
></z-autocomplete>
`

  export default {
    name: 'UsageExamples',

    data() {
      return {
        code,
        cityOptions: [
          { label: '广州', value: 1 },
          { label: '深圳', value: 2 },
          { label: '珠海', value: 3 },
          { label: '佛山', value: 4 }
        ],
        search: ''
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      handleChange(value) {
        // console.log(value)
      },

      handleEnter(event) {
        // console.log(event)
      },

      handleSearch(value) {
        // console.log(value)
      }
    },

    watch: {
      search(value) {
        console.log(value)
      },
      immediate: true
    }
  }
</script>