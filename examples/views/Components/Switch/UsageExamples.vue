<template>
  <div class="usage-examples">
    <usage-demo>
      <div slot="code">
        <pre class="line-numbers">
          <code class="language-markup">
            &lt;template>
              &lt;z-switch
                formId="actively"
                formKey="active"
                label="激活"
                :defaultValue="true"
              >
              &lt;/z-switch>
            &lt;/template>
          </code>
        </pre>
      </div>
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