<template>
  <z-app>

    <div class="form">
      <z-text-field
        formId="login"
        formKey="sex"
        label="性别"
      ></z-text-field>

      <z-btn 
        formId="login"
        color="primary"
        btnType="submit"
        @click="onSave"
      >提交</z-btn>
    </div>

    <div class="form">
      <z-text-field
        :formId="formId"
        formKey="email"
        label="邮箱"
        :rules="[
          { required: true, message: '邮箱为必填项.' },
          { email: true, message: '邮箱格式不正确.' },
          { min: 5, message: '邮箱至少为5位' }
        ]"
        defaultValue="2"
      ></z-text-field>

      <z-text-field
        :formId="formId"
        formKey="age"
        label="年龄"
        :rules="[
          { required: true, message: '年龄为必填项.' }
        ]"
      ></z-text-field>

      <z-text-field
        :formId="formId"
        formKey="password"
        label="手机"
        :rules="[
          { required: true, message: '手机为必填项.' },
          { phone: true, message: '请输入正确的手机号码.' },
        ]"
      ></z-text-field>

      <z-btn 
        :formId="formId"
        color="primary"
        btnType="submit"
        @click="onSubmit"
      >提交</z-btn>

      <z-btn 
        :formId="formId"
        color="error"
        btnType="reset"
      >重置</z-btn>

      <z-btn 
        :formId="formId"
        color="error"
        btnType="clear"
      >清空</z-btn>

      <z-btn 
        color="success"
        btnType="new"
        @click="onNew"
      >新增</z-btn>

      <z-btn 
        color="warning"
        btnType="modify"
        @click="onModify"
      >修改</z-btn>
    </div>
  </z-app>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'App',
    data() {
      return {
        formId: 'sign'
      }
    },
    methods: {
      onSubmit() {
        alert('submit')
      },

      onSave() {
        alert('save')
      },

      onNew(event) {
        console.log(event)
      },

      onModify(event) {
        console.log(event)
      }
    },

    computed: {
      ...mapState(['forms'])
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .form {
    width: 200px;
    margin: 100px auto;
  }
</style>
