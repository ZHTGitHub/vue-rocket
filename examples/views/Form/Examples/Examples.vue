<template>
  <div class="form-examples">
    <h4 class="mb-8 text-h4">{{ $route.meta.title }}</h4>

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
                ></z-text-field>
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
                ></z-select>
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
                ></z-date-picker>
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
                ></z-checkboxs>
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
                  :label="item.label"
                  :validation="item.validation"
                  :options="item.options"
                  :defaultValue="item.defaultValue"
                ></z-btn-toggle>
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
        formId: 'examples',
        cells
      }
    },

    methods: {
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