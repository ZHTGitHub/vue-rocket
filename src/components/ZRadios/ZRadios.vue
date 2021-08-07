<template>
  <div :class="['z-radios z-theme-default']">
    <v-radio-group
      v-model="value"
      column
    >
      <v-radio
        v-for="(item, index) of items" 
        :key="`z_radio_${ index }`"
        :label="item.label"
        :value="item.value"
      ></v-radio>
    </v-radio-group>

    <p class="z-error" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
  import FormMixins from '../../mixins/form'
  import FormValidatorMixins from '../../mixins/validator'

  export default {
    name: 'ZRadios',
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
          label: item.label,
          value: item.value
        })
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