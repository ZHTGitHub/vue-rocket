<template>
  <div 
    :class="['z-field z-theme-default', inputClass]"
    :style="{ width: `${ width }px` }"
  >
    <input 
      class="z-input"
      type="text" 
      v-model="value"
    >
    <span class="z-error" v-if="errorMessage">{{ errorMessage }}</span>
  </div>
</template>

<script>
  import FormMixins from './FormMixins'
  import FormValidatorMixins from './FormValidatorMixins'

  export default {
    name: 'ZInput',
    mixins: [FormMixins, FormValidatorMixins],
    props: {
      inputClass: {
        type: String,
        required: false
      },
      width: {
        type: [Number, String],
        validator(value) {
          let type = typeof value
          switch (type) {
            case 'number': return value;
            case 'string': return value.replace(/px/, '');
          }
        },
        default: 'auto'
      }
    }
  }
</script>

<style lang="css">
  @import url('./style.css');
</style>