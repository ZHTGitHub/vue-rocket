<template>
  <div class="form-examples">
    <typing-title :title="$route.meta.title"></typing-title>

    <div class="filters">
      <v-row>
        <z-btn
          :formId="searchFormId"
          class="mb-2"
          color="primary"
          outlined
          small
          :lockedTime="0"
          @click="onToggle"
        >
          TOGGLE
        </z-btn>
      </v-row>

      <v-row class="z-flex align-center" v-if="show">
        <v-col cols="2">
          <z-text-field
            :formId="searchFormId"
            formKey="name"
            label="姓名"
            :validation="[
              { rule: 'required', message: '姓名为必填项.' }
            ]"
          >
          </z-text-field>
        </v-col>

        <z-btn
          :formId="searchFormId"
          btnType="validate"
          class="mb-2"
          color="primary"
          lockedTime="0"
          @click="onSearch"
        >
          搜索
        </z-btn>
      </v-row>
    </div>

    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card>
          <v-card-text>
            <template v-for="(item, index) in cells.fields" >
              
              <div
                class="field"
                v-if="item.inputType === 'text'"
                :key="`InfoFormInput_${ index }`"
              >
                <z-text-field
                  :formId="formId"
                  :formKey="item.formKey"
                  :label="item.label"
                  :validation="item.validation"
                  :defaultValue="item.defaultValue"
                >
                  <span class="error--text" slot="prepend-outer">{{ item.prependOuter }}</span>
                </z-text-field>
              </div>

              <div
                class="field"
                v-if="item.inputType === 'select'"
                :key="`InfoFormInput_${ index }`"
              >
                <z-select 
                  :formId="formId"
                  :formKey="item.formKey"
                  clearable
                  :label="item.label"
                  :validation="item.validation"
                  :options="item.options"
                  :defaultValue="item.defaultValue"
                >
                  <span class="error--text" slot="prepend-outer">{{ item.prependOuter }}</span>
                </z-select>
              </div>
                
              <div
                class="field"
                v-if="item.inputType === 'date'"
                :key="`InfoFormInput_${ index }`"
              >
                <z-date-picker
                  :formId="formId"
                  :formKey="item.formKey"
                  :label="item.label"
                  :validation="item.validation"
                  :defaultValue="item.defaultValue"
                >
                  <span class="error--text" slot="prepend-outer">{{ item.prependOuter }}</span>
                </z-date-picker>
              </div>

              <div
                class="field"
                v-if="item.inputType === 'radios'"
                :key="`InfoFormInput_${ index }`"
              >
                <z-radios
                  :formId="formId"
                  :formKey="item.formKey"
                  :label="item.label"
                  :validation="item.validation"
                  :options="item.options"
                  :defaultValue="item.defaultValue"
                >
                  <span class="error--text" slot="prepend">*</span>
                </z-radios>
              </div>

              <div
                class="field"
                v-if="item.inputType === 'checkboxs'"
                cols="12" 
                :key="`InfoFormInput_${ index }`"
              >
                <z-checkboxs
                  :formId="formId"
                  :formKey="item.formKey"
                  :label="item.label"
                  :validation="item.validation"
                  :options="item.options"
                  :defaultValue="item.defaultValue"
                >
                  <span class="error--text" slot="prepend">*</span>
                </z-checkboxs>
              </div>

              <div
                class="field"
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
              </div>

              <div
                class="field"
                v-if="item.inputType === 'btnToggle'"
                :key="`InfoFormBtnToggle_${ index }`"
              >
                <z-btn-toggle
                  :formId="formId"
                  :formKey="item.formKey"
                  color="primary"
                  flip
                  multiple
                  :label="item.label"
                  :validation="item.validation"
                  :options="item.options"
                  :defaultValue="[1]"
                >
                  <span class="error--text" slot="prepend">*</span>
                </z-btn-toggle>
              </div>

              <div
                class="field"
                v-if="item.inputType === 'switch'"
                :key="`InfoFormInput_${ index }`"
              >
                <z-switch
                  :formId="formId"
                  :formKey="item.formKey"
                  :label="item.label"
                  :defaultValue="item.defaultValue"
                ></z-switch>
              </div>
            </template>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <z-btn 
              :formId="formId"
              color="primary"
              btnType="validate"
              @click="onSubmit"
            >
            <v-icon>mdi-send</v-icon>
            提交</z-btn>

            <z-btn 
              class="mx-2"
              :formId="formId"
              color="warning"
              btnType="reset"
              @click="onReset"
            >
            <v-icon>mdi-reload</v-icon>
            重置</z-btn>

            <z-btn 
              :formId="formId"
              color="error"
              btnType="clear"
              @click="onClear"
            >
            <v-icon>mdi-broom</v-icon>
            清空</z-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import cells from './cells'

  export default {
    name: 'FormExamples',

    data() {
      return {
        formId: 'Examples',
        searchFormId: 'ExamplesSearch',
        cells,
        show: false
      }
    },

    methods: {
      onSearch() {
        console.log(this.forms[this.searchFormId])
      },

      onToggle() {
        this.show = !this.show
      },

      onSubmit() {
        console.log(this.forms[this.formId])
      },

      onReset() {
        console.log(this.forms[this.formId])
      },

      onClear() {
        console.log(this.forms[this.formId])
      }
    },

    computed: {
      ...mapState(['forms'])
    },
  }
</script>

<style scoped lang="scss">
  .field {
    padding-bottom: 4px;
  }
</style>