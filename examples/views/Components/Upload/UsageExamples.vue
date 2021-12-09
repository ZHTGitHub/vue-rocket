<template>
  <div class="usage-examples">
    <p class="error--text">Building...</p>
    <usage-demo :code="code">
      <div slot="demo">
        <z-upload 
          :formId="formId"
          formKey="upload"
          action="http://zenghaitao/upload"
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

  const code = 
`
<z-upload 
  :formId="formId"
  formKey="upload"
  action="http://zenghaitao/upload"
  :validation="[
    { rule: 'required', message: '头像不能为空.' }
  ]"
></z-upload>
`

  export default {
    name: 'UsageExamples',

    data() {
      return {
        formId: 'upload',
        code
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