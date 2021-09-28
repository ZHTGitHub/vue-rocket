<template>
  <div class="z-radios z-input" :style="{ width: breadth }">
    <v-radio-group
      v-model="value"
      :column="column"
      :disabled="disabled"
      :error="incorrect"
      :error-messages="errorMessage"
      :hide-details="hideDetails"
      :label="label"
      :readonly="readonly"
      :row="row"
      :success="success"
      @change="onChange"
    >
      <v-radio
        v-for="(item, index) of items" 
        :key="`z_radio_${ index }`"
        
        :label="item.label"
        :value="item.value"
        @click="onClick"
      ></v-radio>
    </v-radio-group>
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
    },

    methods: {
      onChange(value) {
        this.$emit('change', value)
      },

      onClick(event) {
        this.$emit('click', event, this.value)
      }
    }
  }
</script>