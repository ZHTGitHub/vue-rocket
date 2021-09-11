<template>
  <div class="z-checkboxs z-input">
    <div 
      class="z-input--checkboxs-group__input"
      :class="[row ? 'z-flex' : '']"
    >
      <legend 
        v-if="label"
        class="v-label theme--light"
      >{{ label }}</legend>
      <div :class="[row ? 'z-flex' : '']">
        <div
          v-for="(item, index) of items" 
          :key="`z_checkbox_${ index }`"
        >
          <v-checkbox
            v-model="values"
            :error="incorrect"
            :hide-details="hideDetails"
            :label="item.label"
            :success="success"
            :value="item.value"
            class="mr-4"
          ></v-checkbox>
        </div>
      </div>
    </div>
    <span class="v-messages theme--light error--text z-messages" v-if="incorrect">{{ errorMessage }}</span>
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
  @import url("../styles/styles.css");

  .z-input--checkboxs-group__input {
    legend.v-label {
      padding-right: 8px;
      margin-top: 24px;
      height: auto;
      font-size: 14px;
      cursor: text;
    }
  }
</style>