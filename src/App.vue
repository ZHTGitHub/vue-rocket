<template>
  <z-app>
    <div class="form">
      <z-text-field
        :formId="formId"
        formKey="name"
        label="姓名"
        :rules="[
          { required: true, message: '姓名为必填项!' }
        ]"
      ></z-text-field>

      <z-text-field
        :formId="formId"
        formKey="age"
        label="年龄"
        :rules="[
          { required: true, message: '姓名为必填项!' }
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
        color="primary"
        @click="onSubmit"
      >提交</z-btn>
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
        console.log(this.forms)
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
