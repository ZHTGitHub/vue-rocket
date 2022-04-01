<template>
  <div 
    class="z-checkbox z-input" 
    :style="{ 
      width: computedWidth,
      height: computedHeight
    }"
  >
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
      @change="onChange"
      @click="onClick"
    ></v-checkbox>
  </div>
</template>

<script>
  import FormMixins from '../mixins/FormMixins'

  const TYPES = [Number, String, Boolean, Symbol, Object, Array]

  export default {
    name: 'ZCheckbox',
    mixins: [FormMixins],

    props: {
      color: {
        type: String,
        required: false
      },

      falseValue: {
        type: TYPES,
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
        type: TYPES,
        default: undefined
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