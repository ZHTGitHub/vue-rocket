<template>
  <div 
    class="z-autocomplete z-input" 
    :style="{ 
      width: computedWidth,
      height: computedHeight
    }"
  >
    <v-autocomplete
      v-model="value"
      :allow-overflow="allowOverflow"
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
      :items="items"
      :label="label"
      :loading="loading"
      :multiple="multiple"
      :noFilter="noFilter"
      :outlined="outlined"
      :persistent-hint="persistentHint"
      :persistent-placeholder="persistentPlaceholder"
      :placeholder="placeholder"
      :prepend-inner-icon="prependIcon"
      :prepend-icon="prependOuterIcon"
      :readonly="readonly"
      :reverse="reverse"
      :search-input="searchInput"
      :solo="solo"
      :suffix="suffix"
      :success="success"
      @blur="onBlur"
      @change="onChange"
      @click="onClick"
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
    </v-autocomplete>
  </div>
</template>

<script>
  import FormMixins from '../mixins/FormMixins'
  import FormValidationMixins from '../mixins/FormValidationMixins'
  import { isArray, isYummy } from '../scripts/tools'

  export default {
    name: 'ZAutocomplete',
    mixins: [FormMixins, FormValidationMixins],
    props: {
      allowOverflow: {
        type: Boolean,
        default: true
      },

      dense: {
        type: Boolean,
        default: false
      },

      loading: {
        type: Boolean,
        default: false
      },

      multiple: {
        type: Boolean,
        default: false
      },

      noFilter: {
        type: Boolean,
        default: false
      },

      options: {
        type: Array,
        required: false
      },

      searchInput: {
        type: String,
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
        this.$emit('blur', this.setCustomValue(event))
      },

      onChange() {
        this.$emit('change', this.setCustomValue())
      },

      onClick(event) {
        this.$emit('click', this.setCustomValue(event))
      },

      onFocus(event) {
        this.$emit('focus', this.setCustomValue(event))
      },

      onInput() {
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