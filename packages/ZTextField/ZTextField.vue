<template>
  <div class="z-field z-input">
    <v-text-field
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
      :prepend-icon="prependOuterIcon"
      :prepend-inner-icon="prependIcon"
      :readonly="readonly"
      :reverse="reverse"
      :suffix="suffix"
      :success="success"
      @blur="onBlur"
      @change="onChange"
      @click="onClick"
      @focus="onFocus"
      @keydown="onKeydown"
      @keyup="onKeyup"
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
    <span class="v-messages theme--light error--text z-messages" v-if="incorrect">{{ errorMessage }}</span>
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