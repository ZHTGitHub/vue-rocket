const code =
`<div class="z-row justify-center">
  <div class="z-col-10 pa-4 rounded-md elevation-4">
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
</div>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'FormExamples',

    data() {
      return {
        formId: 'Examples'
      }
    },

    computed: {
      ...mapState(['forms'])
    }
  }
</script>
`

export default {
  code
}