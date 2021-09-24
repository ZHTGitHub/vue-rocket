<template>
  <div class="usage-examples">
    <usage-demo>
      <div slot="code">
        <pre class="line-numbers">
          <code class="language-markup">
            &lt;template>
              &lt;z-textarea
                formId="intros"
                formKey="intro"
                label="自我介绍"
                placeholder="请输入自我介绍，长度控制在一百字以内."
              >&lt;/z-textarea>
            &lt;/template>
          </code>
        </pre>
      </div>
      <div slot="demo">
        <z-textarea
          formId="intros"
          formKey="intro"
          label="自我介绍"
          placeholder="请输入自我介绍，长度控制在一百字以内."
        ></z-textarea>
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