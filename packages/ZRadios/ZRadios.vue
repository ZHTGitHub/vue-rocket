<template>
  <div class="z-radios z-input" :style="{ width: breadth }">
    <div class="z-flex">
      <div class="z-radio-prepend">
        <slot name="prepend"></slot>
      </div>

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
          :class="[column ? '' : 'ml-2']"
          :label="item.label"
          :value="item.value"
          @click="onClick"
        ></v-radio>
      </v-radio-group>
    </div>
  </div>
</template>

<script>
  import FormMixins from '../mixins/FormMixins'
  import FormValidationMixins from '../mixins/FormValidationMixins'
  import { isArray, isYummy } from '../scripts/tools'

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
        required: false
      },

      row: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        items: []
      }
    },

    methods: {
      onChange(value) {
        this.$emit('change', value)
        this.verifyField()
      },

      onClick(event) {
        event.customValue = this.value
        this.$emit('click', event)
      },

      _setOptions() {
        this.items = []

        if(isArray(this.options) && isYummy(this.options)) {
          for(let item of this.options) {
            this.items.push({
              text: item.label,
              value: item.value
            })
          }
        }
      }
    },

    watch: {
      options: {
        handler() {
          this._setOptions()
        },
        immediate: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .z-radios {
    .z-radio-prepend {
      padding: 4px 4px 4px 0;
      margin-top: 16px;
      height: auto;
      font-size: 14px;
      cursor: text;
    }
  }
</style>