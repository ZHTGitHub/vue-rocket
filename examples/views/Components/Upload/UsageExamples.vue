<template>
  <div class="usage-examples">
    <usage-demo :code="code">
      <div slot="demo">
        <z-upload 
          :formId="formId"
          formKey="upload"
          action="https://112.91.145.58:38080/cloud/user/uploadEnterpriseCorporation"
          color="#f00"
          :headers="headers"
          limit="1"
          :validation="[
            { rule: 'required', message: '头像不能为空.' }
          ]"
          :defaultValue="[{
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
          }]"
          @response="handleResponse"
        >
          <v-icon>mdi-plus</v-icon>
          <div class="z-upload-text">Upload</div>
        </z-upload>

        <z-btn
          class="mt-2"
          color="primary"
          @click="submit"
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
        code,

        headers: {
          token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoidXNlciIsImV4cCI6MTY1MTM3NjAzMiwidXNlcklkIjoiMzQ5NDQ0YWYzOTkwNDU1ZmI1ZDczNWRlZjA4YTE0ZDEifQ.Fd29jS6ywd3gZvZwecsdXOYONKRYQlU4vBqIv7PzcXI'
        }
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      submit() {
        console.log(this.forms[this.formId])
      },

      handleResponse(response) {
        console.log(response)
      }
    },

    computed: {
      ...mapState(['forms'])
    }
  }
</script>