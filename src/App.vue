<template>
  <z-app>
    <div class="form">
      <z-text-field
        :formId="formId"
        formKey="name"
        label="姓名"
        :rules="[
          { required: true, message: '姓名为必填项!' },
          { email: true, message: '姓名格式不正确!' }
        ]"
      ></z-text-field>

      <z-text-field
        :formId="formId"
        formKey="age"
        label="年龄"
        :rules="[
          { required: true, message: '年龄为必填项!' }
        ]"
      ></z-text-field>

      <z-text-field
        :formId="formId"
        formKey="password"
        label="密码"
        :rules="[
          { required: true, message: '密码为必填项!' },
          { min: 8, message: '密码至少为8位!' },
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
        @click="onReset"
      >重置</z-btn>

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
      onSubmit(event) {
        console.log(event)
      },

      onReset() {

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
