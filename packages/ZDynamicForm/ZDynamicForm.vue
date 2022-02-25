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
          <v-toolbar-title>{{ title || effect.title }}</v-toolbar-title>

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
              <v-col 
                :key="`${ formId }${ item.formKey }`"
                :class="item.colsClass || defaultColsClass"
                :cols="item.cols || defaultCols"
              >
              <!-- ZTextField BEGIN -->
              <template v-if="item.inputType === 'text'">
                <z-text-field
                  v-if="_isCrazy(item.suzerain, item.formKey)"
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
                  :defaultValue="detailInfo[item.formKey]"
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
              </template>
              <!-- ZTextField END -->

              <!-- ZTextarea BEGIN -->
              <template v-else-if="item.inputType === 'textarea'">
                <z-textarea
                  v-if="_isCrazy(item.suzerain, item.formKey)"
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
                  :defaultValue="detailInfo[item.formKey]"
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
              </template>
              <!-- ZTextarea END -->

              <!-- ZSelect BEGIN -->
              <template v-else-if="item.inputType === 'select'">
                <z-select 
                  v-if="_isCrazy(item.suzerain, item.formKey)"
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
                  :defaultValue="detailInfo[item.formKey]"
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
              </template>
              <!-- ZSelect END -->

              <!-- ZAutocomplete BEGIN -->
              <template v-else-if="item.inputType === 'autocomplete'">
                <z-autocomplete 
                  v-if="_isCrazy(item.suzerain, item.formKey)"
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
                  :defaultValue="detailInfo[item.formKey]"
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
              </template>
              <!-- ZAutocomplete END -->

              <!-- ZDatePicker BEGIN -->
              <template v-else-if="item.inputType === 'date'">
                <z-date-picker
                  v-if="_isCrazy(item.suzerain, item.formKey)"
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
                  :mode="item.mode"
                  :outlined="item.outlined"
                  :placeholder="item.placeholder"
                  :prepend-icon="item.prependOuterIcon"
                  :prepend-inner-icon="item.prependIcon"
                  :readonly="item.readonly"
                  :reverse="item.reverse"
                  :solo="item.solo"
                  :suffix="item.suffix"
                  :time-format="item.timeFormat"
                  :time-use-seconds="item.timeUseSeconds"
                  :type="item.type"
                  :validation="item.validation"
                  :defaultValue="detailInfo[item.formKey]"
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
              </template>
              <!-- ZDatePicker END -->

              <!-- ZRadios BEGIN -->
              <template v-else-if="item.inputType === 'radios'">
                <z-radios
                  v-if="_isCrazy(item.suzerain, item.formKey)"
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
                  :defaultValue="detailInfo[item.formKey]"
                >
                  <span 
                    v-if="item.prepend"
                    :class="item.prependClass" 
                    slot="prepend"
                  >{{ item.prepend }}</span>
                </z-radios>
              </template>
              <!-- ZRadios END -->

              <!-- ZCheckboxs BEGIN -->
              <template v-else-if="item.inputType === 'checkboxs'">
                <z-checkboxs
                  v-if="_isCrazy(item.suzerain, item.formKey)"
                  :formId="formId"
                  :formKey="item.formKey"
                  :label="item.label"
                  :validation="item.validation"
                  :options="item.options"
                  :defaultValue="detailInfo[item.formKey]"
                >
                  <span 
                    v-if="item.prepend"
                    :class="item.prependClass" 
                    slot="prepend"
                  >{{ item.prepend }}</span>
                </z-checkboxs>
              </template>
              <!-- ZCheckboxs END -->

              <!-- ZButtonToggle BEGIN -->
              <template v-else-if="item.inputType === 'btnToggle'">
                <z-btn-toggle
                  v-if="_isCrazy(item.suzerain, item.formKey)"
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
                  :defaultValue="detailInfo[item.formKey]"
                >
                  <span class="error--text" slot="prepend">*</span>
                </z-btn-toggle>
              </template>
              <!-- ZButtonToggle END -->

              <!-- ZSwitch BEGIN -->
              <template v-else>
                <z-switch
                  v-if="_isCrazy(item.suzerain, item.formKey)"
                  :formId="formId"
                  :formKey="item.formKey"
                  :disabled="item.disabled"
                  :hide-details="item.hideDetails"
                  :label="item.label"
                  :readonly="item.readonly"
                  :defaultValue="detailInfo[item.formKey]"
                ></z-switch>
              </template>
              <!-- ZSwitch END -->
              </v-col>
            </template>
          </v-row>
        </v-card-text>
        <!-- Body END -->

        <!-- Foot BEGIN -->
        <v-card-actions class="justify-end">
          <z-btn
            :class="cancelProps.class"
            :color="cancelProps.color"
            depressed
            @click="_onCancel"
          >{{ cancelProps.text }}</z-btn>

          <z-btn
            :formId="formId"
            btnType="validate"
            :class="confirmProps.class"
            :color="confirmProps.color"
            depressed
            @click="_onConfirm"
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
        default: 600
      }
    },

    data() {
      return {
        dialog: false,
        effect: {},
        defaultCols: 12,
        defaultColsClass: 'py-0',

        detailInfo: {},

        momentDetail: {}
      }
    },

    created() {
      this.momentDetail = { ...this.detail }
    },

    methods: {
      _onCancel() {
        this.$emit('cancel', this.effect, { ...this.forms[this.formId] })
        this.close()
      },

      _onConfirm() {
        this.$emit('confirm', this.effect, { ...this.forms[this.formId] })
      },
      
      close() {
        this.dialog = false
      },

      open(effect) {
        this.effect = { ...effect }
        this.dialog = true
      },

      toggle() {
        this.dialog = !this.dialog
      },

      _isCrazy(suzerain, formKey) {
        if(!suzerain
          || ((suzerain.targetFormKey === formKey) 
          && suzerain.attackValues.includes(this.momentDetail[suzerain.attackFormKey]))
        ) {
          return true
        }
        return false
      }
    },

    computed: {
      ...mapGetters(['forms'])
    },

    watch: {
      forms: {
        handler(forms) {
          const form = forms[this.formId]
          this.momentDetail = { ...this.momentDetail, ...form }
        },
        deep: true,
        immediate: true
      },

      dialog: {
        handler(dialog) {
          this.$emit('dialog', dialog)

          if(dialog) {
            this.detailInfo = { ...this.detail }
          }else {
            rocket.emit('ZHT_RESET_FORM', this.formId)
          }
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
    padding-top: 88px !important;
  }
</style>