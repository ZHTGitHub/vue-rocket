<template>
  <div class="z-switch z-input" :style="{ width: breadth }">
    <v-switch
      v-model="value"
      :dense="dense"
      :disabled="disabled"
      :error="incorrect"
      :error-messages="errorMessage"
      :hide-details="hideDetails"
      :label="label"
      :readonly="readonly"
      :success="success"
      @change="onChange"
      @click="onClick"
    ></v-switch>
  </div>
</template>

<script>
  import FormMixins from '../mixins/FormMixins'
  import FormValidationMixins from '../mixins/FormValidationMixins'

  export default {
    name: 'ZSwitch',
    mixins: [FormMixins, FormValidationMixins],

    props: {
      defaultValue: {
        type: Boolean,
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
      },
    },

    watch: {
      defaultValue: {
        handler(value) {
          this.value = value
        },
        immediate: true
      }
    }
  }
</script>