<template>
  <div class="z-autocomplete z-input" :style="{ width: breadth }">
    <v-autocomplete
      v-model="value"
      :allow-overflow="allowOverflow"
      :append-icon="appendIcon"
      :append-outer-icon="appendOuterIcon"
      :autofocus="autofocus"
      :clear-icon="clearIcon"
      :clearable="clearable"
      :counter="counter"
      :dense="dense"
      :disabled="disabled"
      :error="incorrect"
      :error-messages="errorMessage"
      :filled="filled"
      :hide-details="hideDetails"
      :hint="hint"
      :items="items"
      :label="label"
      :loading="loading"
      :multiple="multiple"
      :noFilter="noFilter"
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
        required: true
      }
    },

    data() {
      return {
        items: []
      }
    },

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

      onFocus(event) {
        this.$emit('focus', event, this.value)
      },

      onInput() {
        this.verifyField()
      }
    },

    watch: {
      options: {
        handler() {
          this.items = []
          for(let item of this.options) {
            this.items.push({
              text: item.label,
              value: item.value
            })
          }
        },
        immediate: true
      }
    }
  }
</script>