<template>
  <div :class="['z-field z-theme-default']">
    <v-text-field
      v-model="value"
      :label="label"
      :append-icon="appendIcon"
      :hide-details="true"
      @keydown="onKeydown"
      @keyup="onKeyup"
      @blur="onBlur"
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
      appendIcon: {
        type: String,
        required: false
      }
    },

    methods: {
      onKeydown() {
        this.$emit('keydown')
      },

      onKeyup() {
        this.debounce(() => {
          console.log(this.value)
        }, 300)
        this.$emit('keyup')
      },
      onBlur() {
        this.$emit('blur')
      }
    },

    watch: {
      defaultValue: {
        handler(value) {
          if(value === undefined || value == null) {
            this.value = undefined
          }else {
            this.value = value
          }
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