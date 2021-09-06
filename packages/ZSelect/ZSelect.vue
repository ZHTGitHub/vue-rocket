<template>
  <div :class="['z-select z-input']">
    <v-select
      v-model="value"
      :append-icon="appendIcon"
      :append-outer-icon="appendOuterIcon"
      :clear-icon="clearIcon"
      :clearable="clearable"
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
    <span class="v-messages theme--light error--text z-messages" v-if="incorrect">{{ errorMessage }}</span>
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

<style scoped lang="css">
  @import url("../styles/styles.css");
</style>