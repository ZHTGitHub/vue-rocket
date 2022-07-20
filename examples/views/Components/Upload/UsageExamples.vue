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
          :showPreviewIcon="true"
          :showDeleteIcon="false"
          @response="handleResponse"
        >
          <v-icon>mdi-plus</v-icon>
          <div class="z-upload-text">上传</div>
        </z-upload>

        <z-btn
          :formId="formId"
          btnType="validate"
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
          token: ''
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