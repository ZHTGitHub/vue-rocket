<template>
  <div :class="['z-select z-theme-default']">
    <v-select
      v-model="value"
      :append-icon="appendIcon"
      :append-outer-icon="appendOuterIcon"
      :disabled="disabled"
      :error="incorrect"
      :hide-details="true"
      :hint="hint"
      :items="items"
      :label="label"
      :prepend-inner-icon="prependIcon"
      :prepend-icon="prependOuterIcon"
      :readonly="readonly"
      :reverse="reverse"
      :success="success"
      @blur="onBlur"
      @change="onChange"
      @click="onClick"
      @focus="onFocus"
    ></v-select>
    <p class="z-error" v-if="incorrect">{{ errorMessage }}</p>
  </div>
</template>

<script>
  import FormMixins from '../mixins/form'
  import FormValidatorMixins from '../mixins/validator'

  export default {
    name: 'ZSelect',
    mixins: [FormMixins, FormValidatorMixins],
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
    },

    watch: {
      defaultValue: {
        handler(value) {
          this.value = value
        },
        immediate: true
      }
    }
  }
</script>

<style scoped lang="css">
  @import url("../styles/styles.css");
</style>