<template>
  <div id="app">
    <div class="form">
      <!-- <md-field class="md-invalid">
        <label>Required Field</label>
        <md-input v-model="required" required></md-input>
        <span class="md-error">There is an error</span>
      </md-field> -->

      <z-input
        :formId="formId"
        formKey="name"
        label="姓名"
        :rules="[
          { required: true, message: '姓名为必填项!' }
        ]"
      ></z-input>

      <z-input
        :formId="formId"
        formKey="age"
        label="年龄"
        :rules="[
          { required: true, message: '姓名为必填项!' }
        ]"
      ></z-input>

      <z-input
        :formId="formId"
        formKey="password"
        label="密码"
        :rules="[
          { required: true, message: '密码为必填项!' },
          { min: 8, message: '密码至少为8位!' },
        ]"
      ></z-input>

      <z-button 
        color="primary"
        @click="onSubmit"
      >提交</z-button>
    </div>
  </div>
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
