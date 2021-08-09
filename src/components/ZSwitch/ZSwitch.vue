<template>
  <div :class="['z-switch z-theme-default']">
    <v-switch
      v-model="value"
      :label="label"
      hide-details
    ></v-switch>
    <p class="z-error" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
  import FormMixins from '../../mixins/form'
  import FormValidatorMixins from '../../mixins/validator'

  export default {
    name: 'ZSwitch',
    mixins: [FormMixins, FormValidatorMixins],

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