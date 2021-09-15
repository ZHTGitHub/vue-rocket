<template>
  <div :class="['z-select z-input']">
    <v-select
      v-model="value"
      :append-icon="appendIcon"
      :append-outer-icon="appendOuterIcon"
      :clear-icon="clearIcon"
      :clearable="clearable"
      :counter="counter"
      :disabled="disabled"
      :error="incorrect"
      :error-messages="errorMessage"
      :hide-details="hideDetails"
      :hint="hint"
      :items="items"
      :label="label"
      :prepend-inner-icon="prependIcon"
      :prepend-icon="prependOuterIcon"
      :readonly="readonly"
      :reverse="reverse"
      :suffix="suffix"
      :success="success"
      @blur="onBlur"
      @change="onChange"
      @click="onClick"
      @focus="onFocus"
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

  export default {
    name: 'ZSelect',
    mixins: [FormMixins, FormValidationMixins],
    props: {
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

    created() {
      for(let item of this.options) {
        this.items.push({
          text: item.label,
          value: item.value
        })
      }
    },

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
      }
    }
  }
</script>