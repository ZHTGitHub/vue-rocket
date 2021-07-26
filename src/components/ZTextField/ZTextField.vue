<template>
  <div 
    :class="['z-field z-theme-default', inputClass]"
    :style="{ width: `${ width }px` }"
  >
    <v-text-field
      v-model="value"
      :label="label"
    ></v-text-field>

    <span class="z-error" v-if="errorMessage">{{ errorMessage }}</span>
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