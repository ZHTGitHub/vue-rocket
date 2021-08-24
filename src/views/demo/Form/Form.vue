<template>
  <div class="demo-form">
    <v-container>
      <v-row>

        <template v-for="(item, index) in InfoFormCells" >
          <v-col 
            v-if="item.inputType === 'text' || item.inputType === 'number'"
            cols="12" 
            :key="`InfoFormInput_${ index }`"
          >
            <z-text-field
              :formId="formId"
              :formKey="item.formKey"
              :label="item.label"
              :rules="item.rules"
            ></z-text-field>
          </v-col>

          <v-col 
            v-if="item.inputType === 'select'"
            cols="12" 
            :key="`InfoFormInput_${ index }`"
          >
            <z-select 
              :formId="formId"
              :formKey="item.formKey"
              :label="item.label"
              :rules="item.rules"
              :options="cityOptions"
            ></z-select>
          </v-col>

          <v-col 
            v-if="item.inputType === 'radios'"
            cols="12" 
            :key="`InfoFormInput_${ index }`"
          >
            <z-radios
              :formId="formId"
              :formKey="item.formKey"
              :label="item.label"
              :rules="item.rules"
              :options="genderOptions"
            >
            </z-radios>
          </v-col>

          <v-col 
            v-if="item.inputType === 'checkboxs'"
            cols="12" 
            :key="`InfoFormInput_${ index }`"
          >
            <z-checkboxs
              :formId="formId"
              :formKey="item.formKey"
              :label="item.label"
              :rules="item.rules"
              :options="hobbyOptions"
            ></z-checkboxs>
          </v-col>

          <v-col 
            v-if="item.inputType === 'switch'"
            cols="12" 
            :key="`InfoFormInput_${ index }`"
          > 
            <z-switch
              :formId="formId"
              :formKey="item.formKey"
              :label="item.label"
            ></z-switch>
          </v-col>
        </template>

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
  import { InfoFormCells } from './cells'

  export default {
    name: 'ZDemoForm',
    data() {
      return {
        formId: 'Info',
        InfoFormCells: InfoFormCells,
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