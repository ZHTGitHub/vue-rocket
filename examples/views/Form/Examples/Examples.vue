<template>
  <div class="form-examples">
    <typing-title :title="$route.meta.title"></typing-title>

    <div class="mt-12">
      <p class="text-black">使用</p>
      <pre><code class="language-html" v-text="cells.code"></code></pre>
    </div>

    <div class="z-row justify-start mt-12">
      <div class="z-col-10 pa-4 rounded-md elevation-2">
        <div class="fields">
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
        </div>

        <div class="z-flex justify-end actions">
          <z-btn 
            :formId="formId"
            color="primary"
            btnType="validate"
            lockedTime="0"
            @click="onSubmit"
          >
          <v-icon>mdi-send</v-icon>
          提交</z-btn>

          <z-btn 
            class="mx-2"
            :formId="formId"
            color="warning"
            btnType="reset"
            @click="onReset"
          >
          <v-icon>mdi-reload</v-icon>
          重置</z-btn>

          <z-btn 
            :formId="formId"
            color="error"
            btnType="clear"
            @click="onClear"
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
        cells
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      onSubmit() {
        console.log(this.forms[this.formId])
      },

      onReset() {
        console.log(this.forms[this.formId])
      },

      onClear() {
        console.log(this.forms[this.formId])
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