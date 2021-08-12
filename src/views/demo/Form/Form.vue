<template>
  <div class="demo-form">

    <v-container>
      <v-row>
        <v-col cols="12">
          <z-text-field
            :formId="formId"
            formKey="email"
            label="邮箱"
            :rules="[
              { required: true, message: '邮箱为必填项.' },
              { email: true, message: '邮箱格式不正确.' }
            ]"
          ></z-text-field>
        </v-col>

        <v-col cols="12">
          <z-text-field
            :formId="formId"
            formKey="phone"
            label="手机"
            :rules="[
              { required: true, message: '手机为必填项.' },
              { phone: true, message: '手机格式不正确.' }
            ]"
          ></z-text-field>
        </v-col>

        <v-col cols="12">
          <z-text-field
            :formId="formId"
            formKey="name"
            label="姓名"
            :rules="[
              { required: true, message: '姓名为必填项.' }
            ]"
          ></z-text-field>
        </v-col>

        <v-col cols="12">
          <z-text-field
            :formId="formId"
            formKey="age"
            label="年龄"
            :rules="[
              { required: true, message: '年龄为必填项.' },
              { numeric: true, message: '年龄为正整数.' },
            ]"
          ></z-text-field>
        </v-col>

        <v-col cols="12">
          <z-select 
            :formId="formId"
            formKey="area"
            label="居住城市"
            :options="cityOptions"
            :rules="[
              { required: true, message: '居住城市为必选项.' }
            ]"
          ></z-select>
        </v-col>

        <v-col cols="12">
          <z-radios
            :formId="formId"
            formKey="gender"
            label="性别"
            :options="genderOptions"
            :rules="[
              { required: true, message: '请选择性别.' }
            ]"
          >
          </z-radios>
        </v-col>

        <v-col cols="12">
          <z-checkboxs
            :formId="formId"
            formKey="hobby"
            label="兴趣"
            :options="hobbyOptions"
            :rules="[
              { required: true, message: '请选择兴趣.' }
            ]"
          ></z-checkboxs>
        </v-col>

        <v-col cols="12"> 
          <z-switch
            :formId="formId"
            formKey="active"
            label="激活"
          ></z-switch>
        </v-col>

        <v-col cols="12">
          <div class="btns flex jcc">
            <z-btn 
              :formId="formId"
              color="primary"
              btnType="submit"
              @click="onSubmit"
            >提交</z-btn>

            <z-btn 
              :formId="formId"
              color="warning"
              btnType="reset"
            >重置</z-btn>

            <z-btn 
              :formId="formId"
              color="error"
              btnType="clear"
            >清空</z-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'ZDemoForm',
    data() {
      return {
        formId: 'info',
        cityOptions: [
          { label: '广州', value: 1 },
          { label: '深圳', value: 2 },
          { label: '珠海', value: 3 },
          { label: '佛山', value: 4 }
        ],
        genderOptions: [
          { label: '男性', value: 1 },
          { label: '女性', value: 2 }
        ],
        hobbyOptions: [
          { label: '游泳', value: 1 },
          { label: '网球', value: 2 },
          { label: '乒乓球', value: 3 },
          { label: '羽毛球', value: 4 }
        ],
        drawer: null
      }
    },
    methods: {
      onSubmit() {
        console.log(this.forms[this.formId])
      }
    },

    computed: {
      ...mapState(['forms'])
    }
  }
</script>