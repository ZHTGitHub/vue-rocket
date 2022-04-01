<template>
  <div 
    class="z-textarea z-input" 
    :style="{ 
      width: computedWidth,
      height: computedHeight
    }"
  >
    <v-textarea
      v-model="value"
      :append-icon="appendIcon"
      :append-outer-icon="appendOuterIcon"
      :autofocus="autofocus"
      :clear-icon="clearIcon"
      :clearable="clearable"
			:color="color"
      :counter="counter"
      :dense="dense"
      :disabled="disabled"
      :error="incorrect"
      :error-messages="errorMessage"
      :filled="filled"
      :height="height"
      :hide-details="hideDetails"
      :hint="hint"
      :label="label"
      :outlined="outlined"
      :persistent-hint="persistentHint"
      :persistent-placeholder="persistentPlaceholder"
      :placeholder="placeholder"
      :prepend-inner-icon="prependIcon"
      :prepend-icon="prependOuterIcon"
      :readonly="readonly"
      :reverse="reverse"
      :solo="solo"
      :suffix="suffix"
      :success="success"
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
    </v-textarea>
  </div>
</template> 

<script>
  import FormMixins from '../mixins/FormMixins'
  import FormValidationMixins from '../mixins/FormValidationMixins'

  export default {
    name: 'ZTextarea',
    mixins: [FormMixins, FormValidationMixins],

    methods: {
      onBlur(event) {
        this.$emit('blur', this.setCustomValue(event))
      },

      onChange() {
        this.$emit('change', this.setCustomValue())
      },

      onClick(event) {
        this.$emit('click', this.setCustomValue(event))
      },

      onClickAppend(event) {
        this.$emit('click:append', this.setCustomValue(event))
      },

      onClickAppendOuter(event) {
        this.$emit('click:append-outer', this.setCustomValue(event))
      },

      onClickClear(event) {
        this.$emit('click:clear', this.setCustomValue(event))
      },

      onClickPrependOuter(event) {
        this.$emit('click:prepend-outer', this.setCustomValue(event))
      },

      onClickPrepend(event) {
        this.$emit('click:prepend', this.setCustomValue(event))
      },

      onFocus(event) {
        this.$emit('focus', this.setCustomValue(event))
      },

      onInput() {
        this.verifyField()
      },

      onKeydown(event) {
        this.$emit('keydown', this.setCustomValue(event))
      },

      onKeyup(event) {
        this.$emit('keyup', this.setCustomValue(event))
      },

      setCustomValue(event = null) {
        if(!event) {
          return this.value
        }
        else {
          return event
        }
      }
    }
  }
</script>