<template>
  <div class="z-date-picker z-input" :style="{ width: breadth }">
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="auto"
      :z-index="zIndex"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="value"
          :append-icon="appendIcon"
          :append-outer-icon="appendOuterIcon"
          :autofocus="autofocus"
          :clear-icon="clearIcon"
          :clearable="clearable"
          :counter="counter"
          :disabled="disabled"
          :error="incorrect"
          :error-messages="errorMessage"
          :filled="filled"
          :hide-details="hideDetails"
          :hint="hint"
          :label="label"
          :outlined="outlined"
          :placeholder="placeholder"
          :prepend-inner-icon="prependIcon"
          :prepend-icon="prependOuterIcon"
          :readonly="readonly"
          :reverse="reverse"
          :solo="solo"
          :suffix="suffix"
          :success="success"
          v-bind="attrs"
          v-on="on"
          @click:clear="onClickClear"
          @input="onInput"
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
        @change="onChangeDate"
      >
        <template v-if="!immediate">
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
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
        </template>
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
      clearable: {
        type: Boolean,
        default: true
      },

      firstDayOfWeek: {
        type: [Number, String],
        default: 0
      },

      immediate: {
        type: Boolean,
        default: true
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
      },

      zIndex: {
        type: [Number, String],
        required: false
      }
    },

    data() {
      return {
        date: undefined,
        menu: false
      }
    },

    methods: {
      onChangeDate() {
        if(this.immediate) {
          this.value = this.date
          this.menu = false
        }
      },

      onConfirm() {
        this.value = this.date
        this.menu = false
      },

      onClickClear(event) {
        this.date = ''
        this.value = this.date
        event.customValue = this.value
        this.verifyField()
        this.$emit('click:clear', event)
      },

      onInput() {
        console.log(this.value)
        this.verifyField()
      }
    },

    watch: {
      defaultValue: {
        handler(value) {
          this.date = value
        },
        immediate: true
      },

      date: {
        handler() {
          this.verifyField()
        }
      }
    }
  }
</script>