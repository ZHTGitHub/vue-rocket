<template>
  <div class="z-checkboxs z-input">
    <div 
      class="z-input--checkboxs-group__input z-flex flex-wrap" 
      :class="[row ? '' : 'flex-column']"
    >
      <legend 
        v-if="label" 
        class="v-label theme--light"
        :class="[incorrect ? 'error--text' : '']"
      >{{ label }}</legend>

        <div
          class="z-checkbox"
          v-for="(item, index) of items" 
          :key="`z_checkbox_${ index }`"
        >
          <v-checkbox
            v-model="values"
            :error="incorrect"
            :hide-details="true"
            :label="item.label"
            :success="success"
            :value="item.value"
            class="mt-0 mr-4"
          ></v-checkbox>
        </div>
    </div>
    <div class="error--text z-messages" >{{ errorMessage }}</div>
  </div>
</template>

<script>
  import FormMixins from '../mixins/FormMixins'
  import FormValidationMixins from '../mixins/FormValidationMixins'

  export default {
    name: 'ZCheckboxs',
    mixins: [FormMixins, FormValidationMixins],
    props: {
      options: {
        type: Array,
        required: true
      },

      row: {
        type: Boolean,
        default: true
      },

      defaultValue: {
        type: Array,
        default: () => { return [] }
      }
    },

    data() {
      return {
        values: [],
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
          this.values = value
        },
        immediate: true
      },

      values: {
        handler(values) {
          if(values.length > 0) {
            this.value = values
          }else {
            this.value = undefined
          }
        },
        immediate: true
      },

      value: {
        handler(value) {
          if(value) {
            this.values = value
          }else {
            this.values = []
          }
        },
        immediate: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .z-input--checkboxs-group__input {
    padding-top: 12px;
    padding-bottom: 6px;
    legend.v-label {
      padding: 8px 8px 8px 0;
      height: auto;
      font-size: 14px;
      cursor: text;
    }

    .z-checkbox {
      height: auto;
    }
  }
</style>