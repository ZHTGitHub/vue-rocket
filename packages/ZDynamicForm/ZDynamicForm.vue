<template>
  <div class="z-dynamic-form">
    <v-dialog
      v-model="dialog"
      :fullscreen="fullscreen"
      :min-width="minWidth"
      :max-width="maxWidth"
      no-click-animation
      :transition="transition"
      :width="width"
    >
      <v-card>
        <!-- Head BEGIN -->
        <v-toolbar
          class="z-toolbar"
          color="primary"
          dark
          :rounded="false"
          :style="{ width: fullscreen ? '100%' : `${ width }px` }"
        >
          <v-toolbar-title>{{ title }}</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn
            icon
            dark
            @click="close"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <!-- Head END -->

        <!-- Body BEGIN -->
        <v-card-text class="z-card-text">
          <v-row>
            <template v-for="item in fieldList">
              <!-- ZTextField BEGIN -->
              <v-col 
                v-if="item.inputType === 'text'"
                :key="`${ formId }${ item.formKey }`"
                :class="item.colsClass"
                :cols="item.cols"
              >
                <z-text-field
                  :formId="formId"
                  :formKey="item.formKey"
                  :append-icon="item.appendIcon"
                  :append-outer-icon="item.appendOuterIcon"
                  :autocomplete="item.autocomplete"
                  :autofocus="item.autofocus"
                  :clear-icon="item.clearIcon"
                  :clearable="item.clearable"
                  :counter="item.counter"
                  :disabled="item.disabled"
                  :filled="item.filled"
                  :hide-details="item.hideDetails"
                  :hint="item.hint"
                  :label="item.label"
                  :outlined="item.outlined"
                  :placeholder="item.placeholder"
                  :prepend-icon="item.prependOuterIcon"
                  :prepend-inner-icon="item.prependIcon"
                  :readonly="item.readonly"
                  :reverse="item.reverse"
                  :solo="item.solo"
                  :suffix="item.suffix"
                  :type="item.type"
                  :validation="item.validation"
                  :defaultValue="detail[item.formKey]"
                >
                  <span 
                    v-if="item.append"
                    :class="item.appendClass" 
                    slot="append"
                  >{{ item.append }}</span>
                  <span 
                    v-if="item.appendOuter"
                    :class="item.appendOuterClass" 
                    slot="append-outer"
                  >{{ item.appendOuter }}</span>
                  <span 
                    v-if="item.prepend"
                    :class="item.prependClass" 
                    slot="prepend"
                  >{{ item.prepend }}</span>
                  <span 
                    v-if="item.prependOuter"
                    :class="item.prependOuterClass" 
                    slot="prepend-outer"
                  >{{ item.prependOuter }}</span>
                </z-text-field>
              </v-col>
              <!-- ZTextField END -->

              <!-- ZTextarea BEGIN -->
              <v-col 
                v-else-if="item.inputType === 'textarea'"
                :key="`${ formId }${ item.formKey }`"
                :class="item.colsClass"
                :cols="item.cols"
              >
                <z-textarea
                  :formId="formId"
                  :formKey="item.formKey"
                  :append-icon="item.appendIcon"
                  :append-outer-icon="item.appendOuterIcon"
                  :autocomplete="item.autocomplete"
                  :autofocus="item.autofocus"
                  :clear-icon="item.clearIcon"
                  :clearable="item.clearable"
                  :counter="item.counter"
                  :disabled="item.disabled"
                  :filled="item.filled"
                  :hide-details="item.hideDetails"
                  :hint="item.hint"
                  :label="item.label"
                  :outlined="item.outlined"
                  :placeholder="item.placeholder"
                  :prepend-icon="item.prependOuterIcon"
                  :prepend-inner-icon="item.prependIcon"
                  :readonly="item.readonly"
                  :reverse="item.reverse"
                  :solo="item.solo"
                  :suffix="item.suffix"
                  :type="item.type"
                  :validation="item.validation"
                  :defaultValue="detail[item.formKey]"
                >
                  <span 
                    v-if="item.append"
                    :class="item.appendClass" 
                    slot="append"
                  >{{ item.append }}</span>
                  <span 
                    v-if="item.appendOuter"
                    :class="item.appendOuterClass" 
                    slot="append-outer"
                  >{{ item.appendOuter }}</span>
                  <span 
                    v-if="item.prepend"
                    :class="item.prependClass" 
                    slot="prepend"
                  >{{ item.prepend }}</span>
                  <span 
                    v-if="item.prependOuter"
                    :class="item.prependOuterClass" 
                    slot="prepend-outer"
                  >{{ item.prependOuter }}</span>
                </z-textarea>
              </v-col>
              <!-- ZTextarea END -->

              <!-- ZSelect BEGIN -->
              <v-col 
                v-else-if="item.inputType === 'select'"
                :key="`${ formId }${ item.formKey }`"
                :class="item.colsClass"
                :cols="item.cols"
              >
                <z-select 
                  :formId="formId"
                  :formKey="item.formKey"
                  :append-icon="item.appendIcon"
                  :append-outer-icon="item.appendOuterIcon"
                  :autofocus="item.autofocus"
                  :clear-icon="item.clearIcon"
                  :clearable="item.clearable"
                  :counter="item.counter"
                  :disabled="item.disabled"
                  :filled="item.filled"
                  :hide-details="item.hideDetails"
                  :hint="item.hint"
                  :label="item.label"
                  :outlined="item.outlined"
                  :placeholder="item.placeholder"
                  :prepend-inner-icon="item.prependIcon"
                  :prepend-icon="item.prependOuterIcon"
                  :readonly="item.readonly"
                  :reverse="item.reverse"
                  :solo="item.solo"
                  :suffix="item.suffix"
                  :validation="item.validation"
                  :options="item.options"
                  :defaultValue="detail[item.formKey]"
                >
                  <span 
                    v-if="item.append"
                    :class="item.appendClass" 
                    slot="prepend-outer"
                  >{{ item.append }}</span>
                  <span 
                    v-if="item.appendOuter"
                    :class="item.appendOuterClass" 
                    slot="prepend-outer"
                  >{{ item.appendOuter }}</span>
                  <span 
                    v-if="item.prepend"
                    :class="item.prependClass" 
                    slot="prepend-outer"
                  >{{ item.prepend }}</span>
                  <span 
                    v-if="item.prependOuter"
                    :class="item.prependOuterClass" 
                    slot="prepend-outer"
                  >{{ item.prependOuter }}</span>
                </z-select>
              </v-col>
              <!-- ZSelect END -->

              <!-- ZAutocomplete BEGIN -->
              <v-col 
                v-else-if="item.inputType === 'autocomplete'"
                :key="`${ formId }${ item.formKey }`"
                :class="item.colsClass"
                :cols="item.cols"
              >
                <z-autocomplete 
                  :formId="formId"
                  :formKey="item.formKey"
                  :allow-overflow="item.allowOverflow"
                  :append-icon="item.appendIcon"
                  :append-outer-icon="item.appendOuterIcon"
                  :autofocus="item.autofocus"
                  :clear-icon="item.clearIcon"
                  :clearable="item.clearable"
                  :counter="item.counter"
                  :dense="item.dense"
                  :disabled="item.disabled"
                  :filled="item.filled"
                  :hide-details="item.hideDetails"
                  :hint="item.hint"
                  :label="item.label"
                  :loading="item.loading"
                  :multiple="item.multiple"
                  :noFilter="item.noFilter"
                  :outlined="item.outlined"
                  :placeholder="item.placeholder"
                  :prepend-inner-icon="item.prependIcon"
                  :prepend-icon="item.prependOuterIcon"
                  :readonly="item.readonly"
                  :reverse="item.reverse"
                  :solo="item.solo"
                  :suffix="item.suffix"
                  :validation="item.validation"
                  :options="item.options"
                  :defaultValue="detail[item.formKey]"
                >
                  <span 
                    v-if="item.append"
                    :class="item.appendClass" 
                    slot="prepend-outer"
                  >{{ item.append }}</span>
                  <span 
                    v-if="item.appendOuter"
                    :class="item.appendOuterClass" 
                    slot="prepend-outer"
                  >{{ item.appendOuter }}</span>
                  <span 
                    v-if="item.prepend"
                    :class="item.prependClass" 
                    slot="prepend-outer"
                  >{{ item.prepend }}</span>
                  <span 
                    v-if="item.prependOuter"
                    :class="item.prependOuterClass" 
                    slot="prepend-outer"
                  >{{ item.prependOuter }}</span>
                </z-autocomplete>
              </v-col>
              <!-- ZAutocomplete END -->

              <!-- ZDatePicker BEGIN -->
              <v-col 
                v-else-if="item.inputType === 'date'"
                :key="`${ formId }${ item.formKey }`"
                :class="item.colsClass"
                :cols="item.cols"
              >
                <z-date-picker
                  :formId="formId"
                  :formKey="item.formKey"
                  :append-icon="item.appendIcon"
                  :append-outer-icon="item.appendOuterIcon"
                  :autocomplete="item.autocomplete"
                  :autofocus="item.autofocus"
                  :clear-icon="item.clearIcon"
                  :clearable="item.clearable"
                  :counter="item.counter"
                  :disabled="item.disabled"
                  :filled="item.filled"
                  :hide-details="item.hideDetails"
                  :hint="item.hint"
                  :label="item.label"
                  :outlined="item.outlined"
                  :placeholder="item.placeholder"
                  :prepend-icon="item.prependOuterIcon"
                  :prepend-inner-icon="item.prependIcon"
                  :readonly="item.readonly"
                  :reverse="item.reverse"
                  :solo="item.solo"
                  :suffix="item.suffix"
                  :type="item.type"
                  :validation="item.validation"
                  :defaultValue="detail[item.formKey]"
                >
                  <span 
                    v-if="item.append"
                    :class="item.appendClass" 
                    slot="append"
                  >{{ item.append }}</span>
                  <span 
                    v-if="item.appendOuter"
                    :class="item.appendOuterClass" 
                    slot="append-outer"
                  >{{ item.appendOuter }}</span>
                  <span 
                    v-if="item.prepend"
                    :class="item.prependClass" 
                    slot="prepend"
                  >{{ item.prepend }}</span>
                  <span 
                    v-if="item.prependOuter"
                    :class="item.prependOuterClass" 
                    slot="prepend-outer"
                  >{{ item.prependOuter }}</span>
                </z-date-picker>
              </v-col>
              <!-- ZDatePicker END -->

              <!-- ZRadios BEGIN -->
              <v-col 
                v-else-if="item.inputType === 'radios'"
                :key="`${ formId }${ item.formKey }`"
                :class="item.colsClass"
                :cols="item.cols"
              >
                <z-radios
                  :formId="formId"
                  :formKey="item.formKey"
                  :column="item.column"
                  :disabled="item.disabled"
                  :hide-details="item.hideDetails"
                  :label="item.label"
                  :readonly="item.readonly"
                  :row="item.row"
                  :validation="item.validation"
                  :options="item.options"
                  :defaultValue="detail[item.formKey]"
                >
                  <span 
                    v-if="item.prepend"
                    :class="item.prependClass" 
                    slot="prepend"
                  >{{ item.prepend }}</span>
                </z-radios>
              </v-col>
              <!-- ZRadios END -->

              <!-- ZCheckboxs BEGIN -->
              <v-col 
                v-else-if="item.inputType === 'checkboxs'"
                :key="`${ formId }${ item.formKey }`"
                :class="item.colsClass"
                :cols="item.cols"
              >
                <z-checkboxs
                  :formId="formId"
                  :formKey="item.formKey"
                  :label="item.label"
                  :validation="item.validation"
                  :options="item.options"
                  :defaultValue="detail[item.formKey]"
                >
                  <span 
                    v-if="item.prepend"
                    :class="item.prependClass" 
                    slot="prepend"
                  >{{ item.prepend }}</span>
                </z-checkboxs>
              </v-col>
              <!-- ZCheckboxs END -->

              <!-- ZButtonToggle BEGIN -->
              <v-col 
                v-else-if="item.inputType === 'btnToggle'"
                :key="`${ formId }${ item.formKey }`"
                :class="item.colsClass"
                :cols="item.cols"
              >
                <z-btn-toggle
                  :formId="formId"
                  :formKey="item.formKey"
                  :borderless="item.borderless"
                  :dense="item.dense"
                  :color="item.color || 'primary'"
                  :flip="item.filp"
                  :label="item.label"
                  :multiple="item.multiple"
                  :mandatory="item.mandatory"
                  :rounded="item.rounded"
                  :tile="item.tile"
                  :validation="item.validation"
                  :options="item.options"
                  :defaultValue="detail[item.formKey]"
                >
                  <span class="error--text" slot="prepend">*</span>
                </z-btn-toggle>
              </v-col>
              <!-- ZButtonToggle END -->

              <!-- ZSwitch BEGIN -->
              <v-col 
                v-else-if="item.inputType === 'switch'"
                :key="`${ formId }${ item.formKey }`"
                :class="item.colsClass"
                :cols="item.cols"
              >
                <z-switch
                  :formId="formId"
                  :formKey="item.formKey"
                  :disabled="item.disabled"
                  :hide-details="item.hideDetails"
                  :label="item.label"
                  :readonly="item.readonly"
                  :defaultValue="detail[item.formKey]"
                ></z-switch>
              </v-col>
              <!-- ZSwitch END -->
            </template>
          </v-row>
        </v-card-text>
        <!-- Body END -->

        <!-- Foot BEGIN -->
        <v-card-actions class="justify-end">
          <z-btn
            :class="cancelProps.class"
            :color="cancelProps.color"
            @click="onCancel"
          >{{ cancelProps.text }}</z-btn>

          <z-btn
            :formId="formId"
            btnType="validate"
            :class="confirmProps.class"
            :color="confirmProps.color"
            @click="onConfirm"
          >{{ confirmProps.text }}</z-btn>
        </v-card-actions>
        <!-- Foot END -->
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import rocket from '../scripts/rocket'

  export default {
    name: 'ZDynamicForm',

    props: {
      cancelProps: {
        type: Object,
        default: () => ({
          class: 'mr-3',
          color: 'normal',
          text: '取消'
        })
      },

      confirmProps: {
        type: Object,
        default: () => ({
          class: '',
          color: 'primary',
          text: '确认'
        })
      },

      detail: {
        type: Object,
        default: () => ({})
      },

      fieldList: {
        type: Array,
        required: true
      },

      formId: {
        type: String,
        default: 'ZDynamicForm'
      },

      fullscreen: {
        type: Boolean,
        default: false
      },

      title: {
        type: String,
        required: false
      },

      maxWidth: {
        type: [Number, String],
        default: 1200
      },

      minWidth: {
        type: [Number, String],
        default: 300
      },

      transition: {
        type: String,
        default: 'dialog-top-transition'
      },

      width: {
        type: [Number, String],
        default: 700
      }
    },

    data() {
      return {
        dialog: false
      }
    },

    methods: {
      onCancel() {
        const form = { ...this.forms[this.formId] }
        this.$emit('cancel', form)
        this.close()
      },

      onConfirm() {
        const form = { ...this.forms[this.formId] }
        this.$emit('confirm', form)
        this.close()
      },
      
      close() {
        this.dialog = false
      },

      open() {
        this.dialog = true
      },

      toggle() {
        this.dialog = !this.dialog
      }
    },

    computed: {
      ...mapGetters(['forms'])
    },

    watch: {
      dialog: {
        handler(dialog) {
          this.$emit('dialog', dialog)
          !dialog && rocket.emit('ZHT_RESET_FORM', this.formId)
        },
        immediate: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .z-toolbar {
    position: fixed;
    width: 100%;
    z-index: 3;
  }

  .z-card-text {
    padding-top: 76px !important;
  }
</style>