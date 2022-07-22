<template>
  <div class="usage-examples">
    <usage-demo :code="code">
      <div slot="demo">
        <z-btn @click="getForm">GET FORM</z-btn>

        <z-file-input
          formId="files"
          formKey="file"
          accept="image/*, .xlsx"
          :auto-upload="false"
          chips
          clearable
          prepend-icon="mdi-file-excel-outline"
          action="http://113.106.108.93:1620/task/uploadImage"
          :effectData="{ 
            path: 'B0118/download/2021/12-09/682021060032022/',
            name: 'leslie.png'
          }"
          :defaultValue="[
            {
              url: '',
              label: 'demo.png'
            }
          ]"
          :headers="{ 'x-name': 'Leslie' }"
          name="file"
          label="文件上传"
          :deleteIcon="false"
          @change="onChange"
          @response="onResponse"
          @delete="onRemove"
        >
          <span class="error--text" slot="prepend-outer">*</span>
        </z-file-input>
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
<z-file-input
  formId="files"
  formKey="file"
  accept="image/*"
  prependIcon="mdi-file-excel-outline"
  action="http://zenghaitao/update-images"
  :effectData="{ 
    sysProTempId: '900709761157169152',
    proCode: 2
  }"
  :defaultValue="[
    {
      url: '',
      label: 'demo.png'
    }
  ]"
  name="tempImages"
  label="文件上传"
  parcel
  :multiple="false"
  :deleteIcon="false"
  @response="onResponse"
  @delete="onRemove"
>
</z-file-input>
`

  export default {
    name: 'UsageExamples',

    data() {
      return {
        code,
        defaultValue: [{}]
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      onChange(file) {
        console.log(file)
        this.defaultValue = [file]
      },

      onResponse(result) {
        console.log(result)
      },

      onRemove(event) {
        console.log(event)
      },

      getForm() {
        console.log(this.forms['files'])
      }
    },

    computed: {
      ...mapState(['forms'])
    }
  }
</script>