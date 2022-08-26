<template>
  <div class="usage-examples">
    <usage-demo :code="code">
      <div slot="demo">
        <z-upload 
          :formId="formId"
          formKey="upload"
          action="http://zenghaitao.com/api/topics/upload"
          color="#f00"
          :headers="headers"
          :validation="[
            { rule: 'required', message: '头像不能为空.' }
          ]"
          :defaultValue="defaultValue"
          :effectData="{
            xxx: 'jjj'
          }"
          multiple
          parcel
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

  const Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZGNmNzBhZDZlNGVmZmZkY2Y2ZWZjOSIsImFjY291bnQiOiJjaGF0MTk1QDE2My5jb20iLCJpYXQiOjE2NjE0MTg5NzYsImV4cCI6MTY2NDAxMDk3Nn0.XJWTZpYEHgz8dkhmJKAifPGH68JGjdWOhn2FyIbxPY8'

  export default {
    name: 'UsageExamples',

    data() {
      return {
        formId: 'upload',
        code,

        headers: {
          Authorization
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

        this.defaultValue = [
          ...this.defaultValue,
          { url: `http://zenghaitao.com/${ response.result.url }` }
        ]
      }
    },

    computed: {
      ...mapState(['forms'])
    }
  }
</script>