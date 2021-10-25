<template>
  <div class="usage-examples">
    <p class="error--text">Building...</p>
    <usage-demo>
      <div slot="code">
        <pre class="line-numbers">
          <code class="language-markup">
            &lt;template>
              &lt;z-upload 
                :formId="formId"
                formKey="upload"
                action="http://113.106.108.93:13000/api/file-upload-and-download/upload"
                :validation="[
                  { rule: 'required', message: '头像不能为空.' }
                ]"
              >&lt;/z-upload>
            &lt;/template>
          </code>
        </pre>
      </div>
      <div slot="demo">
        <z-upload 
          :formId="formId"
          formKey="upload"
          action="http://113.106.108.93:13000/api/file-upload-and-download/upload"
          :validation="[
            { rule: 'required', message: '头像不能为空.' }
          ]"
        ></z-upload>

        <z-btn
          :formId="formId"
          btnType="validate"
          class="mt-2"
          color="primary"
        >
          submit
        </z-btn>
      </div>
    </usage-demo>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.js'

  import { mapState } from 'vuex'

  export default {
    name: 'UsageExamples',

    data() {
      return {
        formId: 'upload'
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      submit() {
        console.log(this.forms[this.formId])
      }
    },

    computed: {
      ...mapState(['forms'])
    }
  }
</script>