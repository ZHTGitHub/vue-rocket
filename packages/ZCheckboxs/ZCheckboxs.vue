<template>
  <div 
    class="z-checkboxs z-input" 
    :style="{ 
      width: computedWidth,
      height: computedHeight
    }"
  >
    <div class="z-flex">
      <div class="z-checkboxs-prepend">
        <slot name="prepend"></slot>
      </div>

      <div class="z-input--checkboxs-group">
        <div 
          class="z-flex flex-wrap flex-row z-input__slot" 
          :class="[column ? 'flex-column' : '', row ? 'flex-row' : '']"
        >
          <legend 
            v-if="label" 
            class="v-label theme--light"
            :class="[incorrect ? 'error--text' : '']"
          >
            {{ label }}
          </legend>

          <div
            class="z-checkbox"
            v-for="(item, index) of items" 
            :key="`z_checkbox_${ index }`"
          >
            <v-checkbox
              v-model="value"
			        :color="color"
              :error="incorrect"
              :hide-details="true"
              :label="item.label"
              :success="success"
              :value="item.value"
              class="mt-0 mr-4"
              @change="onChange"
              @click="onClick"
            ></v-checkbox>
          </div>
        </div>

        <div class="error--text z-messages">{{ errorMessage }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import FormMixins from '../mixins/FormMixins'
  import FormValidationMixins from '../mixins/FormValidationMixins'
  import { tools } from '../scripts/utils'

  export default {
    name: 'ZCheckboxs',
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
      },

      defaultValue: {
        type: Array,
        default: () => []
      }
    },

    data() {
      return {
        sweets: [],
        items: [],
        selectAll: false
      }
    },

    methods: {
      onChange(values) {
        this.value = values
        this.$emit('change', this.value)
        this.verifyField()
      },

      onClick(event) {
        event.customValue = this.value
        this.$emit('click', event)
      },

      onSelectAll() {
        let values = []

        const vLength = this.value.length
        const oLength = this.options.length

        this.selectAll = !(vLength === oLength)

        if(this.selectAll) {
          values = this.sweets
        }

        this.value = values

        this.$emit('change', this.value)
      },

      setOptions() {
        [this.sweets, this.items] = [[], []]

        if(tools.isArray(this.options) && tools.isYummy(this.options)) {
          for(let item of this.options) {
            this.sweets.push(item.value)

            this.items.push({
              label: item.label,
              value: item.value
            })
          }
        }
      }
    },

    watch: {
      options: {
        handler() {
          this.setOptions()
        },
        immediate: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .z-checkboxs {
    .z-checkboxs-prepend {
      padding: 8px 4px 4px 0;
      margin-top: 16px;
      height: auto;
      font-size: 14px;
      cursor: text;
    }

    .z-input--checkboxs-group {
      padding-top: 4px;
      margin-top: 16px;

      .z-input__slot {
        margin-bottom: 4px;

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
    }
  }
</style>