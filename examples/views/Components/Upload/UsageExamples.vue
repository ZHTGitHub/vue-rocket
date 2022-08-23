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
          maxSize="10"
          :validation="[
            { rule: 'required', message: '头像不能为空.' }
          ]"
          :defaultValue="defaultValue"
          :effectData="{
            xxx: 'jjj'
          }"
          :showPreviewIcon="true"
          :showDeleteIcon="true"
          @change="handleChagne"
          @response="handleResponse"
        >
          <v-icon>mdi-plus</v-icon>
          <div class="z-upload-text">上传</div>
        </z-upload>

        <div>
          <z-btn
            class="mr-2"
            color="primary"
            outline
            @click="handleUpdateImage"
          >update image</z-btn>

          <z-btn
            :formId="formId"
            btnType="validate"
            class="mt-2"
            color="primary"
            @click="handleSubmit"
          >
            submit
          </z-btn>
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
        },

        defaultValue: [
          { url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' }
        ]
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      handleUpdateImage() {
        this.defaultValue = [
          { url: 'http://113.106.108.93:31111/api/files/字段规则/B0118/清单大类属性.png' }
        ]
      },

      handleSubmit() {
        console.log(this.forms[this.formId])
      },

      handleChagne(event) {
        console.log(event)
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