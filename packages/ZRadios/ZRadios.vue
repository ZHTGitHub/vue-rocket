<template>
  <div class="z-radios z-input">
    <v-radio-group
      v-model="value"
      :column="column"
      :disabled="disabled"
      :error="incorrect"
      :hide-details="hideDetails"
      :label="label"
      :readonly="readonly"
      :row="row"
      :success="success"
    >
      <v-radio
        v-for="(item, index) of items" 
        :key="`z_radio_${ index }`"
        
        :label="item.label"
        :value="item.value"
      ></v-radio>
    </v-radio-group>
    <span class="v-messages theme--light error--text z-messages" v-if="incorrect">{{ errorMessage }}</span>
  </div>
</template>

<script>
  import FormMixins from '../mixins/FormMixins'
  import FormValidationMixins from '../mixins/FormValidationMixins'

  export default {
    name: 'ZRadios',
    mixins: [FormMixins, FormValidationMixins],
    props: {
      column: {
        type: Boolean,
        default: false
      },

      options: {
        type: Array,
        required: true
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