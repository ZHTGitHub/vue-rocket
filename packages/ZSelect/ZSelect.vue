<template>
  <div class="z-select z-input" :style="{ width: breadth }">
    <v-select
      v-model="value"
      :append-icon="appendIcon"
      :append-outer-icon="appendOuterIcon"
      :autofocus="autofocus"
      :clear-icon="clearIcon"
      :clearable="clearable"
      :counter="counter"
      :disabled="disabled"
      :error="incorrect"
      :error-messages="errorMessage"
      :filled="filled"
      :hide-details="hideDetails"
      :hint="hint"
      :items="items"
      :label="label"
      :outlined="outlined"
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
    >
      <!-- 选择器内部 文字之后 BEGIN -->
      <template v-slot:append>
        <slot name="append"></slot>
      </template>
      <!-- 选择器内部 文字之后 END -->

      <!-- 选择器外部 文字之后 BEGIN -->
      <template v-slot:append-outer>
        <slot name="append-outer"></slot>
      </template>
      <!-- 选择器外部 文字之后 END -->
      
      <!-- 选择器内部 文字之前 BEGIN -->
      <template v-slot:prepend-inner>
        <slot name="prepend"></slot>
      </template>
      <!-- 选择器内部 文字之前 END -->

      <!-- 选择器外部 文字之前 BEGIN -->
      <template v-slot:prepend>
        <slot name="prepend-outer"></slot>
      </template>
      <!-- 选择器外部 文字之前 END -->
    </v-select>
  </div>
</template>

<script>
  import FormMixins from '../mixins/FormMixins'
  import FormValidationMixins from '../mixins/FormValidationMixins'
  import { isArray, isYummy } from '../scripts/tools'

  export default {
    name: 'ZSelect',
    mixins: [FormMixins, FormValidationMixins],
    props: {
      options: {
        type: Array,
        required: false
      }
    },

    data() {
      return {
        items: []
      }
    },

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
        this.$emit('click:prepend-outer')
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

      setOptions() {
        this.items = []

        if(isArray(this.options) && isYummy(this.options)) {
          for(let item of this.options) {
            this.items.push({
              text: item.label,
              value: item.value
            })
          }
        }
      }
    },

    watch: {
      options: {
        handler() {
          this.setOptions()
        },
        immediate: true
      }
    }
  }
</script>