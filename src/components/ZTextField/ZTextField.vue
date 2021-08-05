<template>
  <div :class="['z-field z-theme-default', inputClass]">
    <v-text-field
      v-model="value"
      :label="label"
      :hide-details="true"
    ></v-text-field>
    <p class="z-error" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
  import FormMixins from '../../mixins/form'
  import FormValidatorMixins from '../../mixins/validator'

  export default {
    name: 'ZInput',
    mixins: [FormMixins, FormValidatorMixins],
    props: {
      inputClass: {
        type: String,
        required: false
      },

      defaultValue: {
        type: [String, Number],
        default: undefined
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