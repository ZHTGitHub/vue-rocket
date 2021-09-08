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
          :disabled="disabled"
          :error="incorrect"
          :hide-details="true"
          :hint="hint"
          :label="label"
          :prepend-inner-icon="prependIcon"
          :prepend-icon="prependOuterIcon"
          :readonly="readonly"
          :reverse="reverse"
          :success="success"
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
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
    <span class="v-messages theme--light error--text z-messages" v-if="incorrect">{{ errorMessage }}</span>
  </div>
</template>

<script>
  import FormMixins from '../mixins/FormMixins'
  import FormValidationMixins from '../mixins/FormValidationMixins'

  export default {
    name: 'ZDatePicker',
    mixins: [FormMixins, FormValidationMixins],

    props: {
      readonly: {
        type: Boolean,
        default: true
      },

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

      range: {
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