<template>
  <div 
    class="z-select z-input" 
    :style="{ 
      width: computedWidth,
      height: computedHeight
    }"
  >
    <v-select
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
      :height="height"
      :filled="filled"
      :hide-details="hideDetails"
      :hint="hint"
      :items="items"
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
  import { tools } from '../scripts/utils'

  export default {
    name: 'ZSelect',
    mixins: [FormMixins, FormValidationMixins],
    props: {
      options: {
        type: Array,
        required: false
      },

      returnObject: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        items: []
      }
    },

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
        this.$emit('input', this.setCustomValue())
        this.verifyField()
      },

      // return object or value
      setCustomValue(event = null) {
        if(!event) {
          if(!this.returnObject) {
            return this.value
          }else {
            return this.options.find(item => item.value === this.value)
          }
        }
        else {
          if(!this.returnObject) {
            event.customValue = this.value
          }else {
            event.customValue = this.options.find(item => item.value === this.value)
          }

          return event
        }
      },

      setOptions() {
        this.items = []

        if(tools.isArray(this.options) && tools.isYummy(this.options)) {
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