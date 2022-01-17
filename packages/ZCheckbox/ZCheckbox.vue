<template>
  <div class="z-checkbox z-input" :style="{ width: breadth }">
    <v-checkbox
      v-model="value"
      :color="color"
      :dense="dense"
      :disabled="disabled"
      :error="incorrect"
      :error-messages="errorMessage"
      :false-value="falseValue"
      :hide-details="hideDetails"
      :indeterminate="indeterminate"
      :indeterminate-icon="indeterminateIcon"
      :label="label"
      :off-icon="offIcon"
      :on-icon="onIcon"
      :persistent-hint="persistentHint"
      :prepend-icon="prependIcon"
      :readonly="readonly"
      :success="success"
      :true-value="trueValue"
      :value="customValue"
      @change="onChange"
      @click="onClick"
    ></v-checkbox>
  </div>
</template>

<script>
  import FormMixins from '../mixins/FormMixins'

  export default {
    name: 'ZCheckbox',
    mixins: [FormMixins],

    props: {
      color: {
        type: String,
        required: false
      },

      customValue: {
        type: [String, Number],
        required: false
      },

      falseValue: {
        type: [String, Number, Boolean, undefined, null, NaN, Symbol, Object, Array],
        default: undefined
      },

      indeterminate: {
        type: Boolean,
        default: false
      },

      indeterminateIcon: {
        type: String,
        required: false
      },

      offIcon: {
        type: String,
        required: false
      },

      onIcon: {
        type: String,
        required: false
      },

      persistentHint: {
        type: String,
        required: false
      },

      prependIcon: {
        type: String,
        required: false
      },

      trueValue: {
        type: [String, Number, Boolean, undefined, null, NaN, Symbol, Object, Array],
        default: undefined
      },
    },

    data() {
      return {
        
      }
    },

    methods: {
      onChange(value) {
        this.$emit('change', value)
      },

      onClick(event) {
        event.customValue = this.value
        this.$emit('click', event)
      }
    }
  }
</script>