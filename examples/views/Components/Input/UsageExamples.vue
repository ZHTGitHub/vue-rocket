<template>
  <div class="usage-examples">
    <usage-demo :code="code">
      <div slot="demo">
        <z-text-field
          formId="info"
          formKey="name"
          label="姓名"
          :defaultValue="23"
          @enter="onChange"
        >
        </z-text-field>
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
<z-text-field
  formId="info"
  formKey="name"
  label="姓名"
>
</z-text-field>
`

  export default {
    name: 'UsageExamples',

    data() {
      return {
        code
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      onChange() {
        console.log(23)
      }
    }
  }
</script>