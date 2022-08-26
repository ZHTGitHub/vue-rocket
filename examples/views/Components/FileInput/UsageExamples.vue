<template>
  <div class="usage-examples">
    <usage-demo :code="cells.fileInputCode">
      <div slot="demo">
        <z-btn @click="getForm">GET FORM</z-btn>

        <z-file-input
          formId="files"
          formKey="file"
          accept="image/*, .xlsx"
          chips
          clearable
          multiple
          prepend-icon="mdi-file-excel-outline"
          action="http://zenghaitao.com/api/topics/upload"
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
          :headers="headers"
          name="file"
          label="文件上传"
          parcel
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

  const Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZGNmNzBhZDZlNGVmZmZkY2Y2ZWZjOSIsImFjY291bnQiOiJjaGF0MTk1QDE2My5jb20iLCJpYXQiOjE2NjE0MTg5NzYsImV4cCI6MTY2NDAxMDk3Nn0.XJWTZpYEHgz8dkhmJKAifPGH68JGjdWOhn2FyIbxPY8'

  export default {
    name: 'UsageExamples',

    data() {
      return {
        cells,
        headers: {
          Authorization
        },
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