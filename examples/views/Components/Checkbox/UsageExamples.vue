<template>
  <div class="usage-examples">
    <usage-demo :code="code">
      <div slot="demo">
        <z-btn
          depressed
          color="primary"
          @click="onConfirm"
        >确认</z-btn>

        <div class="z-flex align-center">
          <z-checkbox
            :formId="formId"
            formKey="red"
            label="红色"
            :true-value="true"
            :false-value="false"
          >
          </z-checkbox>

          <z-checkbox
            :formId="formId"
            formKey="blue"
            :true-value="true"
            :false-value="false"
            label="蓝色"
          >
          </z-checkbox>
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

  import { mapState } from 'vuex'

  const code = ``

  export default {
    name: 'UsageExamples',

    data() {
      return {
        code,
        formId: 'color',

        indeterminate: false
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      onConfirm() {
        console.log(this.forms[this.formId])
      }
    },

    computed: {
      ...mapState(['forms'])
    }
  }
</script>