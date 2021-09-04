<template>
  <div class="z-field z-theme-default">
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
      @blur="onBlur"
      @click="onClick"
      @change="onChange"
      @focus="onFocus"
      @keydown="onKeydown"
      @keyup="onKeyup"
    ></v-text-field>
    <span class="v-messages theme--light error--text" v-if="incorrect">{{ errorMessage }}</span>
  </div>
</template> 

<script>
  import FormMixins from '../mixins/FormMixins'
  import FormValidationMixins from '../mixins/FormValidationMixins'

  export default {
    name: 'ZTextField',
    mixins: [FormMixins, FormValidationMixins],

    methods: {
      onBlur() {
        this.$emit('blur')
      },

      onClick() {
        this.$emit('click')
      },

      onChange() {
        this.$emit('change')
      },

      onFocus() {
        this.$emit('focus')
      },

      onKeydown() {
        this.$emit('keydown')
      },

      onKeyup() {
        this.$emit('keyup')
      }
    }
  }
</script>

<style scoped lang="css">
  @import url("../styles/styles.css");
</style>