<template>
  <div class="z-textarea z-input">
    <v-textarea
      v-model="value"
      :append-icon="appendIcon"
      :append-outer-icon="appendOuterIcon"
      :clear-icon="clearIcon"
      :clearable="clearable"
      :counter="counter"
      :disabled="disabled"
      :error="incorrect"
      :hide-details="hideDetails"
      :hint="hint"
      :label="label"
      :prepend-inner-icon="prependIcon"
      :prepend-icon="prependOuterIcon"
      :readonly="readonly"
      :reverse="reverse"
      :suffix="suffix"
      :success="success"
      @blur="onBlur"
      @click="onClick"
      @change="onChange"
      @focus="onFocus"
      @keydown="onKeydown"
      @keyup="onKeyup"
    ></v-textarea>
    <span class="v-messages theme--light error--text z-messages" v-if="incorrect">{{ errorMessage }}</span>
  </div>
</template> 

<script>
  import FormMixins from '../mixins/FormMixins'
  import FormValidationMixins from '../mixins/FormValidationMixins'

  export default {
    name: 'ZTextarea',
    mixins: [FormMixins, FormValidationMixins],

    methods: {
      onBlur() {
        this.$emit('blur')
      },

      onChange() {
        this.$emit('change')
      },

      onClick() {
        this.$emit('click')
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