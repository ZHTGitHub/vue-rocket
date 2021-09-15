<template>
  <div class="z-date-picker z-input">
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="value"
          :append-icon="appendIcon"
          :append-outer-icon="appendOuterIcon"
          :clear-icon="clearIcon"
          :clearable="clearable"
          :counter="counter"
          :disabled="disabled"
          :error="incorrect"
          :error-messages="errorMessage"
          :hide-details="hideDetails"
          :hint="hint"
          :label="label"
          :prepend-inner-icon="prependIcon"
          :prepend-icon="prependOuterIcon"
          :readonly="readonly"
          :reverse="reverse"
          :suffix="suffix"
          :success="success"
          v-bind="attrs"
          v-on="on"
        >
          <!-- 输入框内部 文字之后 BEGIN -->
          <template v-slot:append>
            <slot name="append"></slot>
          </template>
          <!-- 输入框内部 文字之后 END -->

          <!-- 输入框外部 文字之后 BEGIN -->
          <template v-slot:append-outer>
            <slot name="append-outer"></slot>
          </template>
          <!-- 输入框外部 文字之后 END -->
          
          <!-- 输入框内部 文字之前 BEGIN -->
          <template v-slot:prepend-inner>
            <slot name="prepend"></slot>
          </template>
          <!-- 输入框内部 文字之前 END -->

          <!-- 输入框外部 文字之前 BEGIN -->
          <template v-slot:prepend>
            <slot name="prepend-outer"></slot>
          </template>
          <!-- 输入框外部 文字之前 END -->
        </v-text-field>
      </template>
      <v-date-picker
        v-model="date"
        :first-day-of-week="firstDayOfWeek"
        :locale="locale"
        :no-title="noTitle"
        :range="range"
        :readonly="pickerReadonly"
        scrollable
      >
        <v-spacer></v-spacer>
        <v-btn
          text
          color="primary"
          @click="onCancel"
        >
          取消
        </v-btn>
        <v-btn
          text
          color="primary"
          @click="onConfirm"
        >
          确认
        </v-btn>
      </v-date-picker>
    </v-menu>
  </div>
</template>

<script>
  import FormMixins from '../mixins/FormMixins'
  import FormValidationMixins from '../mixins/FormValidationMixins'

  export default {
    name: 'ZDatePicker',
    mixins: [FormMixins, FormValidationMixins],

    props: {
      firstDayOfWeek: {
        type: [Number, String],
        default: 0
      },

      locale: {
        type: String,
        default: 'zh-cn'
      },

      noTitle: {
        type: Boolean,
        default: false
      },

      pickerReadonly: {
        type: Boolean,
        default: false
      },

      pickerType: {
        validator(value) {
          return ~['date', 'month'].indexOf(value)
        },
        default: 'date'
      },

      range: {
        type: Boolean,
        default: false
      },

      readonly: {
        type: Boolean,
        default: true
      }
    },

    data() {
      return {
        date: undefined,
        menu: false
      }
    },

    methods: {
      formatDate() {
        if (!this.date) return null
        const [year, month, day] = this.date.split('-')
        this.value = `${month}/${day}/${year}`
      },

      onCancel() {
        this.onClose()
      },

      onConfirm() {
        this.value = this.date
        this.onClose()
      },

      onClose() {
        this.menu = false
      },

      onOpen() {
        this.menu = true
      },

      onToggle() {
        this.menu = !this.menu
      }
    },

    watch: {
      defaultValue: {
        handler(value) {
          // if(value == null) {
          //   this.value = undefined
          // }

          this.date = value
        },
        immediate: true
      },

      // date: {
      //   handler(date) {
      //     console.log(date)
      //   },
      //   immediate: true
      // }
    }
  }
</script>