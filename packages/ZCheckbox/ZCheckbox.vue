<template>
  <div class="z-checkbox z-input" :style="{ width: breadth }">
    <v-checkbox
      v-model="value"
      :dense="dense"
      :disabled="disabled"
      :error="incorrect"
      :error-messages="errorMessage"
      :hide-details="hideDetails"
      :label="label"
      :readonly="readonly"
      :success="success"
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
      customValue: {
        type: [String, Number],
        required: false
      }
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