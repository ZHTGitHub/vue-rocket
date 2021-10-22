<template>
  <div class="usage-examples">
    <z-upload 
      :formId="formId"
      formKey="upload"
      action="http://113.106.108.93:13000/api/file-upload-and-download/upload"
      chain="data.file"
      :validation="[
        { rule: 'required', message: '头像不能为空.' },
        { rule: 'size:50', message: '头像不能大于50kb.' }
      ]"
    ></z-upload>

    <z-btn 
      :formId="formId"
      btnType="validate"
      @click="submit"
    >submit</z-btn>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'UsageExamples',

    data() {
      return {
        formId: 'upload'
      }
    },

    methods: {
      submit() {
        console.log(this.forms[this.formId])
      }
    },

    computed: {
      ...mapState(['forms'])
    }
  }
</script>