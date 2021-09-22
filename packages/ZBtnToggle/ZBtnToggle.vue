<template>
  <div class="z-btn-toggle z-input">
    <div class="btn-groups">
      <v-btn-toggle 
        v-model="value"
        :borderless="borderless"
        :dense="dense"
        :color="color"
        :multiple="multiple"
        :rounded="rounded"
        :tile="tile"
        @change="onChange"
      >
        <v-btn
          v-for="(item) in items"
          :key="item.label"
          :value="item.value"
          :class="flip ? 'text-rtl' : ''"  
        >
          <v-icon 
            :color="value === item.value ? color : undefined"
          >{{ item.icon }}</v-icon>
          <span>{{ item.label }}</span>
        </v-btn>
      </v-btn-toggle>
    </div>
    <div class="error--text z-messages">{{ errorMessage }}</div>
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

      multiple: {
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
        currentItem: {}
      }
    },

    created() {
      for(let item of this.options) {
        this.items.push({
          label: item.label,
          value: item.value,
          icon: item.icon
        })
      }

      this.setCurrentItem()
    },

    methods: {
      onChange() {
        this.setCurrentItem()
        console.log(this.currentItem)
        this.$emit('change', this.currentItem)
      },

      setCurrentItem() {
        for(let item of this.items) {
          if(item.value === this.value) {
            this.currentItem = item
            return
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .z-btn-toggle {
    .btn-groups {
      height: auto;
      padding-top: 4px;
      margin-top: 16px;
      margin-bottom: 8px;
    }
  }
</style>