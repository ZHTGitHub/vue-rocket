<template>
  <div :class="['z-select z-theme-default']">
    <v-select
      v-model="value"
      :label="label"
      :readonly="readonly"
      :disabled="disabled"
      :items="items"
      :hide-details="true"
      @blur="onBlur"
      @change="onChange"
      @click="onClick"
      @focus="onFocus"
    ></v-select>
    <p class="z-error" v-if="errorMessage">{{ errorMessage }}</p>
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
  p.z-error {
    padding-top: 4px;
    color: #ff5252;
    text-align: left;
    font-size: 12px;
  }
</style>