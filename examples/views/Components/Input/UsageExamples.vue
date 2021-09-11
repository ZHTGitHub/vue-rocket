<template>
  <div class="usage-examples">
    <usage-demo>
      <div slot="code">
        <pre class="line-numbers">
          <code class="language-markup">
            &lt;template>
              &lt;z-text-field
                formId="info"
                formKey="name"
                label="姓名"
                :validation="[{ rule: 'required', message: '姓名为必填项.' }]"
              >
              &lt;/z-text-field>
            &lt;/template>
          </code>
        </pre>
      </div>
      <div slot="demo">
        <z-text-field
          formId="info"
          formKey="name"
          label="姓名"
          :validation="[{ rule: 'required', message: '姓名为必填项.' }]"
        ></z-text-field>
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
        
      }
    },

    mounted() {
      Prism.highlightAll()
    }
  }
</script>