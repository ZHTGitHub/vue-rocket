<template>
  <div v-if="items.length" class="z-btn-toggle z-input" :style="{ width: breadth }">
    <div class="z-flex">
      <div class="z-btn-toggle-prepend">
        <slot name="prepend"></slot>
      </div>

      <div class="z-input--btn-toggle-group">

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

          <div class="btn-groups">
            <v-btn-toggle 
              v-model="values"
              :borderless="borderless"
              :dense="dense"
              :color="color"
              :multiple="multiple"
              :mandatory="mandatory"
              :rounded="rounded"
              :tile="tile"
              @change="onChange"
            >
              <v-btn
                v-for="item in items"
                :key="item.label"
                :value="item.value"
                :class="flip ? 'text-rtl' : ''"
                @click="onClick"
              >
                <v-icon>{{ item.icon }}</v-icon>
                <span>{{ item.label }}</span>
              </v-btn>
            </v-btn-toggle>
          </div>
        </div>

        <div v-show="errorMessage" class="error--text z-messages">{{ errorMessage }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import FormMixins from '../mixins/FormMixins'
  import FormValidationMixins from '../mixins/FormValidationMixins'
  import { isArray, isYummy } from '../scripts/tools'

  export default {
    name: 'ZBtnToggle',
    mixins: [FormMixins, FormValidationMixins],

    props: {
      borderless: {
        type: Boolean,
        default: false
      },

      column: {
        type: Boolean,
        default: false
      },

      color: {
				type: String,
				required: false
			},

      dense: {
        type: Boolean,
        default: true
      },

      flip: {
        type: Boolean,
        default: false
      },

      group: {
        type: Boolean,
        default: false
      },

      multiple: {
        type: Boolean,
        default: false
      },

      mandatory: {
        type: Boolean,
        default: false
      },

      options: {
        type: Array,
        required: false
      },

      rounded: {
        type: Boolean,
        default: false
      },

      row: {
        type: Boolean,
        default: false
      },

      tile: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        items: [],
        values: null
      }
    },

    methods: {
      onChange(value) {
        this.value = value
        this.$emit('change', this.value)
        this.verifyField()
      },

      onClick(event) {
        event.customValue = this.value
        this.$emit('click', event)
      },

      setItems() {
        if(isArray(this.options) && isYummy(this.options)) {
          this.items = this.options
        }
      }
    },

    watch: {
      defaultValue: {
        handler(value) {
          if(this.multiple) {
            this.values = []
          }
          this.values = value
        },
        immediate: true
      },

      options: {
        handler() {
          this.setItems()
        },
        immediate: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .z-btn-toggle {
    .z-btn-toggle-prepend {
      padding: 22px 4px 4px 0;
      margin-top: 16px;
      height: auto;
      font-size: 14px;
      cursor: text;
    }

    .z-input--btn-toggle-group {
      padding-top: 4px;
      margin-top: 16px;

      .z-input__slot {
        margin-bottom: 4px;

        legend.v-label {
          padding: 22px 10px 8px 0;
          height: auto;
          font-size: 14px;
          cursor: text;
        }

        .btn-groups {
          height: auto;
          padding-top: 12px;
          margin-bottom: 8px;
        }
      }
    }

    
  }
</style>