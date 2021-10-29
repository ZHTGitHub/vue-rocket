<template>
  <div 
    v-if="items.length"
    class="z-btn-toggle z-input" 
    :style="{ width: breadth }"
  >
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
    <div v-show="errorMessage" class="error--text z-messages">{{ errorMessage }}</div>
  </div>
</template>

<script>
  import FormMixins from '../mixins/FormMixins'
  import FormValidationMixins from '../mixins/FormValidationMixins'

  export default {
    name: 'ZBtnToggle',
    mixins: [FormMixins, FormValidationMixins],

    props: {
      borderless: {
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
        required: true
      },

      rounded: {
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
        const oldValue = this.value

        this.$nextTick(() => {
          if(oldValue !== this.value) {
            event.customValue = this.value
            this.$emit('click', event)
          }
        })
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
          this.items = this.options
        },
        immediate: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .z-btn-toggle {
    .btn-groups {
      height: auto;
      padding-top: 12px;
      margin-bottom: 8px;
    }
  }
</style>