<template>
  <div class="usage-examples">
    <usage-demo :code="code">
      <div slot="demo">
        <z-text-field
          formId="info"
          formKey="name"
          label="姓名"
          defaultValue="Leslie"
          @change="onChange"
        >
          <span class="error--text" slot="prepend-outer">*</span>
        </z-text-field>
      </div>
    </usage-demo>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'

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
      onChange(value) {
        console.log(value)
      }
    }
  }
</script>