<template>
  <div class="z-field z-theme-default">
    <v-text-field
      v-model="value"
      :append-icon="appendIcon"
      :append-outer-icon="appendOuterIcon"
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
    <p class="z-error" v-if="incorrect">{{ errorMessage }}</p>
  </div>
</template>

<script>
  import FormMixins from '../mixins/form'
  import FormValidatorMixins from '../mixins/validator'

  export default {
    name: 'ZTextField',
    mixins: [FormMixins, FormValidatorMixins],

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
    },

    watch: {
      defaultValue: {
        handler(value) {
          if(value === undefined || value == null) {
            this.value = undefined
          }else {
            this.value = value
          }
        },
        immediate: true
      }
    }
  }
</script>

<style scoped lang="css">
  @import url("../styles/styles.css");
</style>