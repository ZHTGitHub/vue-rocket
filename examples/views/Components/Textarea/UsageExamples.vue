<template>
  <div class="usage-examples">
    <usage-demo :code="code">
      <div slot="demo">
        <z-textarea
          formId="intros"
          formKey="intro"
          label="自我介绍"
          width="500"
          height="30"
          placeholder="请输入自我介绍，长度控制在一百字以内."
        ></z-textarea>
      </div>
    </usage-demo>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'

  const code = 
`
<z-textarea
  formId="intros"
  formKey="intro"
  label="自我介绍"
  placeholder="请输入自我介绍，长度控制在一百字以内."
></z-textarea>
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