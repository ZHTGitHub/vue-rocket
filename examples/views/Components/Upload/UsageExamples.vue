<template>
  <div class="usage-examples">
    <usage-demo :code="code">
      <div slot="demo">
        <z-upload 
          :formId="formId"
          formKey="upload"
          action="http://localhost:6003/orders/upload"
          :auto-upload="false"
          :chink="false"
          color="#f00"
          :headers="headers"
          hideDetails
          :maxCount="1"
          :maxSize="1024 * 5"
          :validation="[
            { rule: 'required', message: '头像不能为空.' }
          ]"
          :defaultValue="defaultValue"
          :effectData="{
            xxx: 'jjj'
          }"
          multiple
          parcel
          :showPreviewIcon="false"
          :showDeleteIcon="false"
          @delete="handleDelete"
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
  import tools from '../../../../packages/scripts/utils/tools'

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
          Authorization: ''
        },

        defaultValue: [
          { 
            upload: false,
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' 
          }
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

      handleDelete({ thumb, thumbIndex }) {
        console.log(thumb)
        console.log(thumbIndex)
      },

      async handleChagne({ files, maxSize }) {
        console.log(files, maxSize)

        const blob = await tools.fileEvents.fileToBlob(files[0])
        const base64 = await tools.fileEvents.fileToBase64(files[0])

        console.log(blob)
        // console.log(base64)  

        this.defaultValue = [
          ...this.defaultValue,
          { url: blob }
        ]
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