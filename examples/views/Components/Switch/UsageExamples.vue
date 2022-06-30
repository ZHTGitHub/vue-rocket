<template>
  <div class="usage-examples">
    <usage-demo :code="code">
      <div slot="demo">
        <z-switch
          formId="actively"
          formKey="active"
          label="激活"
          :defaultValue="true"
        ></z-switch>
      </div>
    </usage-demo>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'

  const code = 
`
<z-switch
  formId="actively"
  formKey="active"
  label="激活"
  :defaultValue="true"
></z-switch>
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
    }
  }
</script>