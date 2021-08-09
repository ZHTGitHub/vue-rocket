<template>
  <div :class="['z-checkboxs z-theme-default']">
    <div :class="[row ? 'flex' : (column ? '' : 'flex')]">
      <div
        v-for="(item, index) of items" 
        :key="`z_checkbox_${ index }`"
      >
        <v-checkbox
          v-model="values"
          :label="item.label"
          :value="item.value"
          hide-details
          class="mr-4"
        ></v-checkbox>
      </div>
    </div>
    <p class="z-error" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
  import FormMixins from '../../mixins/form'
  import FormValidatorMixins from '../../mixins/validator'

  export default {
    name: 'ZCheckboxs',
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
          this.value = values
        },
        immediate: true
      }
    }
  }
</script>

<style scoped lang="css">
  .z-checkboxs .checkboxs {
    /* display: flex; */
  }

  .z-checkboxs .checkboxs span {
    margin-right: 16px;
  }

  p.z-error {
    padding-top: 4px;
    color: #ff5252;
    text-align: left;
    font-size: 12px;
  }
</style>