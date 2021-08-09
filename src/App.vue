<template>
  <v-app>

    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>

    <!-- <div class="form">
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

      <z-select 
        :formId="formId"
        formKey="area"
        label="国家"
        :options="areaOptions"
        :rules="[
          { required: true, message: '国家为必选项.' }
        ]"
      ></z-select>

      <z-checkboxs
        :formId="formId"
        formKey="checkbox"
        label="checkboxs"
        :options="itemOptions"
        :rules="[
          { required: true, message: '请选择checkboxs.' }
        ]"
        :defaultValue="[1]"
      >
      </z-checkboxs>

      <z-radios
        :formId="formId"
        formKey="radio"
        label="radios"
        :options="itemOptions"
        :rules="[
          { required: true, message: '请选择radios.' }
        ]"
      >
      </z-radios>

      <z-switch
        :formId="formId"
        formKey="switch"
        label="switch"
        :defaultValue="true"
      ></z-switch>

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
    </div> -->
  </v-app>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'App',
    data() {
      return {
        formId: 'sign',
        areaOptions: [
          { label: '中国', value: 1 },
          { label: '美国', value: 2 }
        ],
        itemOptions: [
          { label: '两天一夜', value: 1 },
          { label: '三天一夜', value: 2 }
        ],
        drawer: null
      }
    },
    methods: {
      onSubmit() {
        console.log(this.forms[this.formId])
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
    width: 300px;
    margin: 100px auto;
  }
</style>
