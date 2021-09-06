<template>
  <div :class="['z-switch z-input']">
    <v-switch
      v-model="value"
      :label="label"
      :readonly="readonly"
      :disabled="disabled"
      hide-details
    ></v-switch>
    <p class="v-messages theme--light error--text z-messages" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
  import FormMixins from '../mixins/FormMixins'
  import FormValidationMixins from '../mixins/FormValidationMixins'

  export default {
    name: 'ZSwitch',
    mixins: [FormMixins, FormValidationMixins],

    props: {
      defaultValue: {
        type: Boolean,
        default: false
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