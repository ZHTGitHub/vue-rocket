<template>
  <div :class="['z-checkboxs z-theme-default']">
    <div :class="[row ? 'z-flex' : '']">
      <div
        v-for="(item, index) of items" 
        :key="`z_checkbox_${ index }`"
      >
        <v-checkbox
          v-model="values"
          :error="incorrect"
          hide-details
          :label="item.label"
          :success="success"
          :value="item.value"
          class="mr-4"
        ></v-checkbox>
      </div>
    </div>
    <span class="v-messages theme--light error--text" v-if="incorrect">{{ errorMessage }}</span>
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

      // column: {
      //   type: Boolean,
      //   default: false
      // },

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
          }
        },
        immediate: true
      },

      value: {
        handler(value) {
          if(!value) {
            this.values = []
          }else {
            this.values = value
          }
        },
        immediate: true
      }
    }
  }
</script>

<style scoped lang="css">
  @import url("../styles/styles.css");
</style>