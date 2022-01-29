<template>
  <div class="form-examples">
    <typing-title :title="$route.meta.title"></typing-title>

    <z-btn
      color="primary"
      @click="getForms"
    >form</z-btn>

    <v-row justify="center">
      <v-col cols="6">
        <v-card>
          <v-card-text>
            <z-text-field
              :formId="formId"
              formKey="name"
              label="姓名"
              :validation="[
                { rule: 'required', message: '姓名为必填项.' },
                { rule: 'min:4', message: '字段长度不得小于4.' }
              ]"
              defaultValue="Leslie"
            >
              <span class="error--text" slot="prepend-outer">*</span>
            </z-text-field>

            <z-text-field
              :formId="formId"
              formKey="phone"
              label="手机"
              :validation="[
                { rule: 'required', message: '姓名为必填项.' }
              ]"
            >
              <span class="error--text" slot="prepend-outer">*</span>
            </z-text-field>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <z-btn 
              :formId="formId"
              color="primary"
              btnType="validate"
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
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
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

    methods: {
      getForms() {
        console.log(this.forms)
      },

      onSearch() {
        console.log(this.forms[this.searchFormId])
      },

      onOpen() {
        this.$refs.dynamic.open()
      },

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