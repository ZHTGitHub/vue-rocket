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
                action="https://112.91.145.58:38080/cloud/user/uploadEnterpriseCorporation"
                :headers="headers"
                :validation="[
                  { rule: 'required', message: '头像不能为空.' }
                ]"
                @change="onUploadImage"
              ></z-upload>

              <z-text-field
                :formId="formId"
                formKey="username"
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
                label="密码"
                :validation="[
                  { rule: 'required', message: '密码为必填项.' },
                  { rule: 'between:8,16', message: '密码长度在8-16位.' }
                ]"
              >
                <span class="error--text" slot="prepend-outer">*</span>
              </z-text-field>

              <z-file-input
                :formId="formId"
                formKey="file"
                label="文件"
                prependIcon="mdi-file-excel-outline"
                :validation="[
                  { rule: 'required', message: '文件不能为空.' }
                ]"
                
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
        formId: 'Examples',
        searchFormId: 'ExamplesSearch',
        cells,
        headers: {
          token: ''
        }
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      onUploadImage(event) {
        console.log(event)
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