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
    <span class="v-messages theme--light error--text z-messages" v-if="incorrect">{{ errorMessage }}</span>
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