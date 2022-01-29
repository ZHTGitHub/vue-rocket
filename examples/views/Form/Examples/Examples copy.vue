<template>
  <div class="form-examples">
    <typing-title :title="$route.meta.title"></typing-title>

    <div class="z-flex justify-end filters">
      <z-btn
        :formId="searchFormId"
        class="mb-2"
        color="primary"
        outlined
        small
        :lockedTime="0"
        @click="onOpen"
      >
        open
      </z-btn>
    </div>

    <v-row justify="center">
      <v-col cols="6">
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
                  @enter="onEnter"
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

    <z-dynamic-form 
      ref="dynamic" 
      title="动态表单"
      :fieldList="cells.fields"
      :detail="{ sexual: 1 }"
      @cancel="handleCancel"
      @confirm="handleConfirm"
    ></z-dynamic-form>
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
        cells
      }
    },

    methods: {
      onSearch() {
        console.log(this.forms[this.searchFormId])
      },

      onOpen() {
        this.$refs.dynamic.open()
      },

      onSubmit() {
        console.log(this.forms[this.formId])
      },

      onReset() {
        console.log(this.forms[this.formId])
      },

      onClear() {
        console.log(this.forms[this.formId])
      },

      handleCancel(form) {
        console.log(form)
      },

      handleConfirm(form) {
        console.log(form)
      },

      onEnter() {
        console.log(23)
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