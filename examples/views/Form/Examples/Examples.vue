<template>
  <div class="form-examples">
    <typing-title :title="$route.meta.title"></typing-title>

    <usage-demo :code="cells.code">
      <div slot="demo">
        <div class="z-row justify-start">
          <div class="z-col-10 pa-4 rounded-md elevation-2">
            <div class="fields">
              <z-upload
                :formId="formId"
                formKey="avatar"
                action="http://localhost:7000/api/topics/upload"
                :headers="headers"
                :defaultValue="defaultUploadValue"
                @change="onUploadChange"
                @response="onUploadResponse"
              ></z-upload>

              <z-text-field
                :formId="formId"
                formKey="username"
                clearable 
                label="用户名"
                :validation="[
                  { rule: 'required', message: '用户名为必填项.' },
                  { rule: 'between:2,16', message: '用户名长度在2-16位.' }
                ]"
                defaultValue="Leslie"
              >
                <span class="error--text" slot="prepend-outer">*</span>
              </z-text-field>

              <z-text-field
                :formId="formId"
                formKey="password"
                clearable 
                hint="xxxx"
                label="密码"
                :validation="[
                  { rule: 'required', message: '密码为必填项.' },
                  { rule: 'between:8,16', message: '密码长度在8-16位.' }
                ]"
              >
                <span class="error--text" slot="prepend-outer">*</span>
              </z-text-field>

              <z-file-input
                action="http://localhost:7000/api/topics/upload"
                clearable 
                :formId="formId"
                formKey="file"
                label="文件"
                prependIcon="mdi-file-excel-outline"
                :show-upload-list="false"
                :validation="[
                  { rule: 'required', message: '文件不能为空.' }
                ]"
                :defaultValue="defaultFileValue"
                @change="onFileChange"
                @response="onFileResponse"
              >
                <span class="error--text" slot="prepend-outer">*</span>
              </z-file-input>
            </div>

            <div class="z-flex justify-end actions">
              <z-btn 
                :formId="formId"
                btnType="validate"
                color="primary"
                lockedTime="0"
                @click="handleSubmit"
              >
              <v-icon>mdi-send</v-icon>
              提交</z-btn>

              <z-btn 
                :formId="formId"
                btnType="reset"
                class="mx-2"
                color="warning"
              >
              <v-icon>mdi-reload</v-icon>
              重置</z-btn>

              <z-btn 
                :formId="formId"
                btnType="clear"
                color="error"
              >
              <v-icon>mdi-broom</v-icon>
              清空</z-btn>
            </div>
          </div>

          <div class="z-col-14 px-4 py-2 rounded-md">
            {{ forms[formId] }}
          </div>
        </div>
      </div>
    </usage-demo>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.min.css'

  import { mapState } from 'vuex'
  import cells from './cells'

  export default {
    name: 'FormExamples',

    data() {
      return {
        formId: 'FormExamples',
        cells,
        headers: {
          token: ''
        },
        defaultUploadValue: [],
        defaultFileValue: []
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      handleSubmit() {
        console.log(this.forms[this.formId])
      },

      onUploadChange(file) {
        console.log(file)
      },

      onUploadResponse(result) {
        console.log(result)
        this.defaultUploadValue = [
          {
            url: `http://localhost:7000/${ result.url }`
          }
        ]
      },

      onFileChange(file) {
        console.log(file)
      },

      onFileResponse(result) {
        console.log(result)

        if(!result.url) {
          return
        }

        this.defaultFileValue = [
          {
            label: result.files[0].name,
            url: `http://localhost:7000/${ result.url }`
          }
        ]
      }
    },

    computed: {
      ...mapState(['forms'])
    },
  }
</script>

<style scoped lang="scss">
  .field {
    padding-bottom: 4px;
  }
</style>