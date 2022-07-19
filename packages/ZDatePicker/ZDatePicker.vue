<template>
  <div 
    class="z-date-picker z-input" 
    :style="{ 
      width: computedWidth,
      height: computedHeight
    }"
  >
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
			    :color="color"
          :counter="counter"
          :dense="dense"
          :disabled="disabled"
          :error="incorrect"
          :error-messages="errorMessage"
          :filled="filled"
          :height="height"
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
          @click:clear="clearDate" 
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
      
      <!-- 日期选择器 BEGIN -->
      <template v-if="mode === 'date'">
        <v-date-picker
          v-model="date"
          :first-day-of-week="firstDayOfWeek"
          :locale="locale"
          :max="max"
          :min="min"
          :no-title="noTitle"
          :range="range"
          :readonly="pickerReadonly"
          :type="pickerType"
          scrollable
          @change="changeDate"
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
              @click="confirmDate"
            >
              确认
            </v-btn>
          </template>
        </v-date-picker>
      </template>
      <!-- 日期选择器 END -->
      
      <!-- 时间选择器 BEGIN -->
      <template v-else>
        <v-time-picker
          v-model="date"
          :first-day-of-week="firstDayOfWeek"
          :format="timeFormat"
          :locale="locale"
          :max="max"
          :min="min"
          :no-title="noTitle"
          :range="range"
          :readonly="pickerReadonly"
          scrollable
          :type="pickerType"
          :use-seconds="timeUseSeconds"
          @change="changeDate"
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
              @click="confirmDate"
            >
              确认
            </v-btn>
          </template>
        </v-time-picker>
      </template>
      <!-- 时间选择器 END -->
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

      max: {
        type: String,
        required: false
      },

      min: {
        type: String,
        required: false
      },

      mode: {
        validator(value) {
          return ~['date', 'time'].indexOf(value)
        },
        default: 'date'
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

      timeFormat: {
        validator(value) {
          return ~['ampm', '24hr'].indexOf(value)
        },
        default: 'ampm'
      },

      timeUseSeconds: {
        type: Boolean,
        default: false
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
      changeDate() {
        if(this.range) {
          const [startDate, endDate] = this.date
          const startTime = new Date(startDate).getTime()
          const endTime = new Date(endDate).getTime()

          if(endTime < startTime) {
            this.date = this.date.reverse()
          }
        }

        if(this.immediate) {
          this.value = this.date
          this.menu = false
          
          this.$emit('input', this.setCustomValue())
        }
      },

      confirmDate() {
        this.value = this.date
        this.menu = false

        this.$emit('confirm', this.value)
      },

      clearDate(event) {
        this.date = ''
        this.value = this.date

        this.$emit('click:clear', this.setCustomValue(event))
        this.verifyField()
      },

      // onInput() {
      //   this.$emit('input', this.setCustomValue())
      //   this.verifyField()
      // },

      setCustomValue(event = null) {
        if(!event) {
          return this.value
        }
        else {
          event.customValue = this.value
          return event
        }
      }
    },

    watch: {
      defaultValue: {
        handler(value) {
          this.date = value
        },
        deep: true
      },

      date: {
        handler() {
          this.verifyField()
        },
        deep: true
      },

      value() {
        // console.log({date: this.value})
        // this.$emit('input', this.setCustomValue())
      }
    }
  }
</script>