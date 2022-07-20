<template>
  <div class="usage-examples">
    <usage-demo :code="cells.checkboxCode">
      <div slot="demo">
        <div class="z-flex align-center">
          <z-checkbox
            :formId="formId"
            formKey="red"
            label="红色"
            :true-value="true"
            :false-value="false"
            :indeterminate="indeterminate"
            :defaultValue="defaultValue"
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
  import { mapState } from 'vuex'
  import cells from './cells'

  export default {
    name: 'UsageExamples',

    data() {
      return {
        formId: 'color',
        cells,
        indeterminate: false,
        defaultValue: false
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    computed: {
      ...mapState(['forms'])
    }
  }
</script>