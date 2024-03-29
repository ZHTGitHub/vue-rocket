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
          <!-- 顶部插槽 BEGIN -->
          <slot name="top"></slot>
          <!-- 顶部插槽 END -->

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
                  v-if="mutexForm[item.formKey] !== false"
                  :formId="formId"
                  :formKey="item.formKey"
                  :append-icon="item.appendIcon"
                  :append-outer-icon="item.appendOuterIcon"
                  :autocomplete="item.autocomplete"
                  :autofocus="item.autofocus"
                  :clear-icon="item.clearIcon"
                  :clearable="item.clearable"
                  :counter="item.counter"
                  :disabled="returnDisabled({ formKey: item.formKey, disabled: item.disabled })"
                  :filled="item.filled"
                  :hide-details="item.hideDetails"
                  :hint="item.hint"
                  :label="item.label"
                  :outlined="item.outlined"
                  :placeholder="item.placeholder"
                  :prepend-icon="item.prependOuterIcon"
                  :prepend-inner-icon="item.prependIcon"
                  :readonly="returnReadonly({ formKey: item.formKey, readonly: item.readonly })"
                  :reverse="item.reverse"
                  :solo="item.solo"
                  :suffix="item.suffix"
                  :type="item.type"
                  :validation="item.validation"
                  :defaultValue="detailInfo[item.formKey]"
                  @blur="onBlur($event, item.formKey)"
                  @change="onChange($event, item.formKey)"
                  @click="onClick($event, item.formKey)"
                  @enter="onEnter($event, item.formKey)"
                  @focus="onFocus($event, item.formKey)"
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
                  v-if="mutexForm[item.formKey] !== false"
                  :formId="formId"
                  :formKey="item.formKey"
                  :append-icon="item.appendIcon"
                  :append-outer-icon="item.appendOuterIcon"
                  :autocomplete="item.autocomplete"
                  :autofocus="item.autofocus"
                  :clear-icon="item.clearIcon"
                  :clearable="item.clearable"
                  :counter="item.counter"
                  :disabled="returnDisabled({ formKey: item.formKey, disabled: item.disabled })"
                  :filled="item.filled"
                  :hide-details="item.hideDetails"
                  :hint="item.hint"
                  :label="item.label"
                  :outlined="item.outlined"
                  :placeholder="item.placeholder"
                  :prepend-icon="item.prependOuterIcon"
                  :prepend-inner-icon="item.prependIcon"
                  :readonly="returnReadonly({ formKey: item.formKey, readonly: item.readonly })"
                  :reverse="item.reverse"
                  :solo="item.solo"
                  :suffix="item.suffix"
                  :type="item.type"
                  :validation="item.validation"
                  :defaultValue="detailInfo[item.formKey]"
                  @blur="onBlur($event, item.formKey)"
                  @change="onChange($event, item.formKey)"
                  @click="onClick($event, item.formKey)"
                  @enter="onEnter($event, item.formKey)"
                  @focus="onFocus($event, item.formKey)"
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
                  v-if="mutexForm[item.formKey] !== false"
                  :formId="formId"
                  :formKey="item.formKey"
                  :append-icon="item.appendIcon"
                  :append-outer-icon="item.appendOuterIcon"
                  :autofocus="item.autofocus"
                  :clear-icon="item.clearIcon"
                  :clearable="item.clearable"
                  :counter="item.counter"
                  :disabled="returnDisabled({ formKey: item.formKey, disabled: item.disabled })"
                  :filled="item.filled"
                  :hide-details="item.hideDetails"
                  :hint="item.hint"
                  :label="item.label"
                  :outlined="item.outlined"
                  :placeholder="item.placeholder"
                  :prepend-inner-icon="item.prependIcon"
                  :prepend-icon="item.prependOuterIcon"
                  :readonly="returnReadonly({ formKey: item.formKey, readonly: item.readonly })"
                  :return-object="item.returnObject"
                  :reverse="item.reverse"
                  :solo="item.solo"
                  :suffix="item.suffix"
                  :validation="item.validation"
                  :options="returnItems({ formKey: item.formKey, options: item.options })"
                  :defaultValue="detailInfo[item.formKey]"
                  @blur="onBlur($event, item.formKey)"
                  @change="onChange($event, item.formKey)"
                  @click="onClick($event, item.formKey)"
                  @enter="onEnter($event, item.formKey)"
                  @focus="onFocus($event, item.formKey)"
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
                  v-if="mutexForm[item.formKey] !== false"
                  :formId="formId"
                  :formKey="item.formKey"
                  :allow-overflow="item.allowOverflow"
                  :append-icon="item.appendIcon"
                  :append-outer-icon="item.appendOuterIcon"
                  :autofocus="item.autofocus"
                  :chips="item.chips"
                  :clear-icon="item.clearIcon"
                  :clearable="item.clearable"
                  :counter="item.counter"
                  :dense="item.dense"
                  :disabled="returnDisabled({ formKey: item.formKey, disabled: item.disabled })"
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
                  :readonly="returnReadonly({ formKey: item.formKey, readonly: item.readonly })"
                  :reverse="item.reverse"
                  :solo="item.solo"
                  :suffix="item.suffix"
                  :validation="item.validation"
                  :options="returnItems({ formKey: item.formKey, options: item.options })"
                  :defaultValue="detailInfo[item.formKey]"
                  @blur="onBlur($event, item.formKey)"
                  @change="onChange($event, item.formKey)"
                  @click="onClick($event, item.formKey)"
                  @enter="onEnter($event, item.formKey)"
                  @focus="onFocus($event, item.formKey)"
                  @search="onSearch($event, item.formKey)"
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
                  v-if="mutexForm[item.formKey] !== false"
                  :formId="formId"
                  :formKey="item.formKey"
                  :append-icon="item.appendIcon"
                  :append-outer-icon="item.appendOuterIcon"
                  :autocomplete="item.autocomplete"
                  :autofocus="item.autofocus"
                  :clear-icon="item.clearIcon"
                  :clearable="item.clearable"
                  :counter="item.counter"
                  :disabled="returnDisabled({ formKey: item.formKey, disabled: item.disabled })"
                  :filled="item.filled"
                  :first-day-of-week="item.firstDayOfWeek"
                  :hide-details="item.hideDetails"
                  :hint="item.hint"
                  :immediate="item.immediate"
                  :label="item.label"
                  :locale="item.locale"
                  :max="item.max"
                  :min="item.min"
                  :mode="item.mode"
                  :no-title="item.noTitle"
                  :outlined="item.outlined"
                  :picker-readonly="item.pickerReadonly"
                  :picker-type="item.pickerType"
                  :placeholder="item.placeholder"
                  :prepend-icon="item.prependOuterIcon"
                  :prepend-inner-icon="item.prependIcon"
                  :range="item.range"
                  :readonly="returnReadonly({ formKey: item.formKey, readonly: item.readonly })"
                  :reverse="item.reverse"
                  :solo="item.solo"
                  :suffix="item.suffix"
                  :time-format="item.timeFormat"
                  :time-use-seconds="item.timeUseSeconds"
                  :type="item.type"
                  :validation="item.validation"
                  :z-index="item.zIndex"
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
              <template v-else-if="item.inputType === 'radios' && dialog">
                <z-radios
                  v-if="mutexForm[item.formKey] !== false"
                  :formId="formId"
                  :formKey="item.formKey"
                  :column="item.column"
                  :disabled="returnDisabled({ formKey: item.formKey, disabled: item.disabled })"
                  :hide-details="item.hideDetails"
                  :label="item.label"
                  :readonly="returnReadonly({ formKey: item.formKey, readonly: item.readonly })"
                  :row="item.row"
                  :validation="item.validation"
                  :options="returnItems({ formKey: item.formKey, options: item.options })"
                  :defaultValue="detailInfo[item.formKey]"
                  @change="onChange($event, item.formKey)"
                  @click="onClick($event, item.formKey)"
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
                  v-if="mutexForm[item.formKey] !== false"
                  :formId="formId"
                  :formKey="item.formKey"
                  :label="item.label"
                  :validation="item.validation"
                  :options="returnItems({ formKey: item.formKey, options: item.options })"
                  :defaultValue="detailInfo[item.formKey]"
                  @change="onChange($event, item.formKey)"
                  @click="onClick($event, item.formKey)"
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
                  v-if="mutexForm[item.formKey] !== false"
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
                  :options="returnItems({ formKey: item.formKey, options: item.options })"
                  :defaultValue="detailInfo[item.formKey]"
                  @change="onChange($event, item.formKey)"
                  @click="onClick($event, item.formKey)"
                >
                  <span class="error--text" slot="prepend">*</span>
                </z-btn-toggle>
              </template>
              <!-- ZButtonToggle END -->

              <!-- ZSwitch BEGIN -->
              <template v-else-if="item.inputType === 'switch'">
                <z-switch
                  v-if="mutexForm[item.formKey] !== false"
                  :formId="formId"
                  :formKey="item.formKey"
                  :disabled="returnDisabled({ formKey: item.formKey, disabled: item.disabled })"
                  :hide-details="item.hideDetails"
                  :label="item.label"
                  :readonly="returnReadonly({ formKey: item.formKey, readonly: item.readonly })"
                  :validation="item.validation"
                  :defaultValue="detailInfo[item.formKey]"
                  @change="onChange($event, item.formKey)"
                  @click="onClick($event, item.formKey)"
                ></z-switch>
              </template> 
              <!-- ZSwitch END -->

              <!-- ZFileInput BEGIN -->
              <template v-else-if="item.inputType === 'fileInput'">
                <z-file-input
                  v-if="mutexForm[item.formKey] !== false"
                  :formId="formId"
                  :formKey="item.formKey"
                  :accept="item.accept"
                  :action="item.action"
                  :autofocus="item.autofocus"
                  :auto-upload="item.autoUpload"
                  :chips="item.chips"
                  :clear-icon="item.clearIcon"
                  :clearable="item.clearable"
                  :counter="item.counter"
                  :delete-icon="item.deleteIcon"
                  :disabled="returnDisabled({ formKey: item.formKey, disabled: item.disabled })"
                  :effect-data="item.effectData"
                  :error="item.error"
                  :filled="item.filled"
                  :headers="item.headers"
                  :height="item.height"
                  :hide-details="item.hideDetails"
                  :hint="item.hint"
                  :label="item.label"
                  :maxCount="item.maxCount"
                  :maxSize="item.maxSize"
                  :method="item.method"
                  :multiple="item.multiple"
                  :name="item.name"
                  :outlined="item.outlined"
                  :parcel="item.parcel"
                  :persistent-hint="item.persistentHint"
                  :persistent-placeholder="item.persistentPlaceholder"
                  :placeholder="item.placeholder"
                  :prepend-icon="item.prependIcon"
                  :prepend-outer-icon="item.prependOuterIcon"
                  :readonly="returnReadonly({ formKey: item.formKey, readonly: item.readonly })"
                  :reverse="item.reverse"
                  :solo="item.solo"
                  :suffix="item.suffix"
                  :success="item.success"
                  :showUploadList="item.showUploadList"
                  :truncate-length="item.truncateLength"
                  :validation="item.validation"
                  :defaultValue="detailInfo[item.formKey]"
                  @blur="onBlur($event, item.formKey)"
                  @change="onChange($event, item.formKey)"
                  @click="onClick($event, item.formKey)"
                  @enter="onEnter($event, item.formKey)"
                  @focus="onFocus($event, item.formKey)"
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
                </z-file-input>
              </template> 
              <!-- ZFileInput END -->

              <!-- ZUpload BEGIN -->
              <template v-else-if="item.inputType === 'upload'">
                <z-upload
                  v-if="mutexForm[item.formKey] !== false"
                  :formId="formId"
                  :formKey="item.formKey"
                  :action="item.action"
                  :auto-upload="item.autoUpload"
                  :color="item.color"
                  :disabled="returnDisabled({ formKey: item.formKey, disabled: item.disabled })"
                  :flip="item.flip"
                  :headers="item.headers"
                  :maxCount="item.maxCount"
                  :maxSize="item.maxSize"
                  :method="item.method"
                  :name="item.name"
                  :validation="item.validation"
                  :defaultValue="detailInfo[item.formKey]"
                  @change="onChange($event, item.formKey)"
                  @response="onResponse($event, item.formKey)"
                >
                  <span 
                    v-if="item.prepend"
                    :class="item.prependClass" 
                    slot="prepend"
                  >{{ item.prepend }}</span>
                </z-upload>
              </template>
              <!-- ZUpload END -->
              </v-col>
            </template>
          </v-row>
          
          <!-- 底部插槽 BEGIN -->
          <slot name="bottom"></slot>
          <!-- 底部插槽 END -->
        </v-card-text>
        <!-- Body END -->

        <!-- Foot BEGIN -->
        <slot name="foot">
          <v-card-actions class="justify-end">
            <z-btn
              v-if="returnCancelProps.visible"
              :class="returnCancelProps.class"
              :color="returnCancelProps.color"
              depressed
              @click="onCancel"
            >{{ returnCancelProps.text }}</z-btn>

            <z-btn
              v-if="returnConfirmProps.visible"
              :formId="formId"
              btnType="validate"
              :class="returnConfirmProps.class"
              :color="returnConfirmProps.color"
              depressed
              @click="onConfirm"
            >{{ returnConfirmProps.text }}</z-btn>
          </v-card-actions>
        </slot>
        <!-- Foot END -->
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import rocket from '../scripts/rocket'
  import { tools } from '../scripts/utils'

  const defaultCancelProps = {
    class: 'mr-3',
    color: 'normal',
    text: '取消',
    visible: true
  }

  const defaultConfirmProps = {
    class: '',
    color: 'primary',
    text: '确认',
    visible: true
  }

  export default {
    name: 'ZDynamicForm',

    props: {
      cancelProps: {
        type: Object,
        default: () => ({})
      },

      config: {
        type: Object,
        default: () => ({})
      },

      confirmProps: {
        type: Object,
        default: () => ({})
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

        conf: {},
        detailInfo: {},
        mutexForm: {}
      }
    },

    computed: {
      ...mapGetters(['forms']),

      returnDisabled() {
        return ({ formKey, disabled }) => {
          return this.conf?.[formKey]?.disabled || disabled
        }
      },

      returnItems() {
        return ({ formKey, options }) => {
          return this.conf?.[formKey]?.items || options
        }
      },

      returnReadonly() {
        return ({ formKey, readonly }) => {
          return this.conf?.[formKey]?.readonly || readonly
        }
      },

      returnCancelProps() {
        return { ...defaultCancelProps, ...this.cancelProps }
      },

      returnConfirmProps() {
        return { ...defaultConfirmProps, ...this.confirmProps }
      }
    },

    watch: {
      config: {
        handler(config) {
          this.conf = {}

          if(tools.isYummy(config)) {
            this.conf = tools.deepClone(config)
          }
        },
        deep: true,
        immediate: true
      },

      detail: {
        handler(detail) {
          this.detailInfo = tools.deepClone(detail)
        },
        deep: true,
        immediate: true
      },

      forms: {
        handler(forms) {
          const form = forms[this.formId]

          if(tools.isYummy(form)) {
            for(let formKey in form) {
              this.conf[formKey]?.mutex?.map(item => {
                this.setMutex(form[formKey], item)
              })
            }
          }
        },
        deep: true,
        immediate: true
      },

      dialog: {
        handler(dialog) {
          this.$emit('dialog', dialog)
          !dialog && rocket.emit('ZHT_RESET_FORM', this.formId)
        },
        immediate: true
      }
    },

    methods: {
      onCancel() {
        this.$emit('cancel', this.effect, tools.deepClone(this.forms[this.formId]))
        this.close()
      },

      onConfirm() {
        this.$emit('confirm', this.effect, tools.deepClone(this.forms[this.formId]))
      },
      
      close() {
        this.dialog = false
        // this.$emit('close')
      },

      open(effect = {}) {
        this.effect = tools.deepClone(effect)
        this.dialog = true
        // this.$emit('open')
      },

      toggle() {
        this.dialog = !this.dialog
      },

      setMutex(value, { formKey, always, includes, excludes }) {
        // 若 always 为 true，只要当前 field 有值跟其互斥的输入框就不显示
        if(always) {
          this.$set(this.mutexForm, formKey, tools.isYummy(value) ? false : true)
          return
        }
        
        // 只要当前 field 的值跟 includes 的值匹配，跟其互斥的输入框就不显示
        if(tools.isYummy(includes)) {
          this.$set(this.mutexForm, formKey, includes.includes(value) ? false : true)
          return
        }

        // 只要当前 field 的值跟 excludes 的值匹配，跟其互斥的输入框就显示
        if(tools.isYummy(excludes)) {
          this.$set(this.mutexForm, formKey, excludes.includes(value) ? true : false)
          return
        }
      },

      onBlur(event, formKey) {
        this.$emit('blur', { formKey, event })
        this.$emit(`blur:${ formKey }`, event)
      },

      onChange(event, formKey) {
        this.$emit('change', { formKey, event })
        this.$emit(`change:${ formKey }`, event)
      },

      onClick(event, formKey) {
        this.$emit('click', { formKey, event })
        this.$emit(`click:${ formKey }`, event)
      },

      onEnter(event, formKey) {
        this.$emit('enter', { formKey, event })
        this.$emit(`enter:${ formKey }`, event)
      },

      onFocus(event, formKey) {
        this.$emit('focus', { formKey, event })
        this.$emit(`focus:${ formKey }`, event)
      },

      onResponse(result, formKey) {
        this.$emit('response', { formKey, result })
        this.$emit(`response:${ formKey }`, result)
      },

      onSearch(event, formKey) {
        this.$emit('search', { formKey, event })
        this.$emit(`search:${ formKey }`, event)
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