<template>
  <div :class="['z-radios z-theme-default']">
    <v-radio-group
      v-model="value"
      :column="column"
      :row="row"
      hide-details
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
  import FormMixins from '../mixins/form'
  import FormValidatorMixins from '../mixins/validator'

  export default {
    name: 'ZRadios',
    mixins: [FormMixins, FormValidatorMixins],
    props: {
      options: {
        type: Array,
        required: true
      },
      column: {
        type: Boolean,
        default: false
      },
      row: {
        type: Boolean,
        default: true
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
    }
  }
</script>

<style scoped lang="css">
  @import url("../styles/styles.css");
</style>