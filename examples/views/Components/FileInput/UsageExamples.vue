<template>
  <div class="usage-examples">
    <usage-demo :code="code">
      <div slot="demo">
        <z-file-input
          formId="files"
          formKey="file"
          accept="image/*, .xlsx"
          chips
          clearable
          prependIcon="mdi-file-excel-outline"
          action="http://113.106.108.93:1620/task/uploadImage"
          :effectData="{ 
            path: 'B0118/download/2021/12-09/682021060032022/',
            name: 'leslie.png'
          }"
          :fileList="[
            {
              url: '',
              name: 'demo.png'
            }
          ]"
          :headers="{ 'x-name': 'Leslie' }"
          name="file"
          label="文件上传"
          parcel
          :multiple="true"
          :deleteIcon="false"
          @response="onResponse"
          @delete="onRemove"
        >
        </z-file-input>
      </div>
    </usage-demo>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'

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
  :fileList="[
    {
      url: '',
      name: 'demo.png'
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
        code
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      onResponse(result) {
        console.log(result)
      },

      onRemove(event) {
        console.log(event)
      }
    }
  }
</script>