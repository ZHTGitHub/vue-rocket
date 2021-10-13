<template>
  <div class="z-field z-input" :style="{ width: breadth }">
    <v-text-field
      v-model="value"
      :append-icon="appendIcon"
      :append-outer-icon="appendOuterIcon"
      autocomplete="off"
      :clear-icon="clearIcon"
      :clearable="clearable"
      :counter="counter"
      :disabled="disabled"
      :error="incorrect"
      :error-messages="errorMessage"
      :hide-details="hideDetails"
      :hint="hint"
      :label="label"
      :placeholder="placeholder"
      :prepend-icon="prependOuterIcon"
      :prepend-inner-icon="prependIcon"
      :readonly="readonly"
      :reverse="reverse"
      :suffix="suffix"
      :success="success"
      :type="type"
      @blur="onBlur"
      @change="onChange"
      @click="onClick"
      @click:append="onClickAppend"
      @click:append-outer="onClickAppendOuter"
      @click:clear="onClickClear"
      @click:prepend="onClickPrependOuter"
      @click:prepend-inner="onClickPrepend"
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
  </div>
</template> 

<script>
  import FormMixins from '../mixins/FormMixins'
  import FormValidationMixins from '../mixins/FormValidationMixins'

  export default {
    name: 'ZTextField',
    mixins: [FormMixins, FormValidationMixins],

    methods: {
      onBlur(event) {
        this.$emit('blur', event, this.value)
      },

      onChange(value) {
        this.$emit('change', value)
      },

      onClick(event) {
        this.$emit('click', event, this.value)
      },

      onClickAppend(event) {
        this.$emit('click:append', event, this.value)
      },

      onClickAppendOuter(event) {
        this.$emit('click:append-outer', event, this.value)
      },

      onClickClear(event) {
        this.$emit('click:clear', event, this.value)
      },

      onClickPrependOuter(event) {
        this.$emit('click:prepend-outer', event, this.value)
      },

      onClickPrepend(event) {
        this.$emit('click:prepend', event, this.value)
      },

      onFocus(event) {
        this.$emit('focus', event, this.value)
      },

      onKeydown(event) {
        this.$emit('keydown', event, this.value)
      },

      onKeyup(event) {
        this.$emit('keyup', event, this.value)
      }
    }
  }
</script>