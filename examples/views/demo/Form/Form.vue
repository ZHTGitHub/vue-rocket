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
              :validation="item.validation"
              :defaultValue="item.defaultValue"
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
              clearable
              :label="item.label"
              :validation="item.validation"
              :options="cityOptions"
              :defaultValue="item.defaultValue"
            ></z-select>
          </v-col>

          <v-col 
            v-if="item.inputType === 'date'"
            cols="12" 
            :key="`InfoFormInput_${ index }`"
          > 
            <z-date-picker
              :formId="formId"
              :formKey="item.formKey"
              :label="item.label"
              :validation="item.validation"
              prepend-icon="mdi-calendar"
              :defaultValue="item.defaultValue"
            ></z-date-picker>
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
              :validation="item.validation"
              :options="genderOptions"
              :defaultValue="item.defaultValue"
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
              :validation="item.validation"
              :options="hobbyOptions"
              :defaultValue="item.defaultValue"
            ></z-checkboxs>
          </v-col>

          <v-col 
            v-if="item.inputType === 'textarea'"
            cols="12" 
            :key="`InfoFormTextarea_${ index }`"
          >
            <z-textarea
              :formId="formId"
              :formKey="item.formKey"
              :label="item.label"
              :validation="item.validation"
              :defaultValue="item.defaultValue"
            ></z-textarea>
          </v-col>

          <v-col 
            v-if="item.inputType === 'switch'"
            cols="2" 
            :key="`InfoFormInput_${ index }`"
          > 
            <z-switch
              :formId="formId"
              :formKey="item.formKey"
              :label="item.label"
              :defaultValue="item.defaultValue"
            ></z-switch>
          </v-col>
        </template>

        <v-col cols="12">
          <div class="btns z-flex justify-center">
            <z-btn 
              :formId="formId"
              color="primary"
              btnType="validate"
              @click="onSubmit"
            >提交</z-btn>

            <z-btn 
              class="mx-2"
              :formId="formId"
              color="warning"
              btnType="reset"
            >重置</z-btn>

            <z-btn 
              :formId="formId"
              color="error"
              btnType="clear"
            >清空</z-btn>

            <z-btn 
              class="mx-2"
              :formId="formId"
              color="error"
              @click="onSearch"
            >搜索</z-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { InfoFormCells } from './cells'
  import FormCategoryMixins from '../../../../packages/mixins/FormCategoryMixins'

  export default {
    name: 'ZDemoForm',
    mixins: [FormCategoryMixins],

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
        // this.validateAll(this.formId)
        console.log(this.forms[this.formId])
      },

      onSearch() {
        console.log('form search')
      }
    },

    computed: {
      ...mapState(['forms'])
    }
  }
</script>