<template>
  <div class="usage-examples">
    <usage-demo :code="cells.fileInputCode">
      <div slot="demo">
        <z-btn @click="getForm">GET FORM</z-btn>

        <z-file-input
          formId="files"
          formKey="file"
          accept="image/*, .xlsx"
          :auto-upload="false"
          chips
          clearable
          multiple
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
  import cells from './cells'

  export default {
    name: 'UsageExamples',

    data() {
      return {
        cells,
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