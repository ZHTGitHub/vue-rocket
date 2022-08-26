<template>
  <div class="usage-examples">
    <usage-demo :code="code">
      <div slot="demo">
        <div class="z-flex">
          <z-autocomplete
            :formId="formId"
            formKey="area"
            chips
            multiple
            :options="cityOptions"
            :defaultValue="1"
            @change="handleChange"
            @enter="handleEnter"
            @search="handleSearch"
          ></z-autocomplete>

          <v-btn @click="getValue">获取</v-btn>
        </div>
      </div>
    </usage-demo>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'

  import { mapState } from 'vuex'

  const code = 
`
<z-autocomplete
  formId="auto"
  formKey="auto"
  :options="cityOptions"
  :defaultValue="1"
></z-autocomplete>
`

  export default {
    name: 'UsageExamples',

    data() {
      return {
        formId: 'AutocompleteExample',
        code,
        cityOptions: [
          { label: '广州', value: 1 },
          { label: '深圳', value: 2 },
          { label: '珠海', value: 3 },
          { label: '佛山', value: 4 }
        ],
        search: ''
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      handleChange(value) {
        // console.log(value)
      },

      handleEnter(event) {
        // console.log(event)
      },

      handleSearch(value) {
        // console.log(value)
      },

      getValue() {
        console.log(this.forms[this.formId])
      }
    },

    computed: {
      ...mapState(['forms'])
    },

    watch: {
      search(value) {
        console.log(value)
      },
      immediate: true
    }
  }
</script>