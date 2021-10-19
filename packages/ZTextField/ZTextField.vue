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
      :filled="filled"
      :hide-details="hideDetails"
      :hint="hint"
      :label="label"
      :outlined="outlined"
      :placeholder="placeholder"
      :prepend-icon="prependOuterIcon"
      :prepend-inner-icon="prependIcon"
      :readonly="readonly"
      :reverse="reverse"
      :solo="solo"
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
      @input="onInput"
      @keydown="onKeydown"
      @keyup="onKeyup"
      @keyup.enter="onEnter"
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
        event.customValue = this.value
        this.$emit('blur', event)
      },

      onChange(value) {
        this.$emit('change', value)
      },

      onClick(event) {
        event.customValue = this.value
        this.$emit('click', event)
      },

      onClickAppend(event) {
        event.customValue = this.value
        this.$emit('click:append', event)
      },

      onClickAppendOuter(event) {
        event.customValue = this.value
        this.$emit('click:append-outer', event)
      },

      onClickClear(event) {
        event.customValue = this.value
        this.$emit('click:clear', event)
      },

      onClickPrependOuter(event) {
        event.customValue = this.value
        this.$emit('click:prepend-outer', event)
      },

      onClickPrepend(event) {
        event.customValue = this.value
        this.$emit('click:prepend', event)
      },

      onFocus(event) {
        event.customValue = this.value
        this.$emit('focus', event)
      },

      onInput() {
        this.verifyField()
      },

      onKeydown(event) {
        event.customValue = this.value
        this.$emit('keydown', event)
      },

      onKeyup(event) {
        event.customValue = this.value
        this.$emit('keyup', event)
      },

      onEnter(event) {
        event.customValue = this.value
        this.$emit('enter', event)
      }
    }
  }
</script>