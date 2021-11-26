<template>
  <div class="z-dropdown">
    <v-menu 
      :auto="auto"
      :bottom="bottom"
      :closeOnClick="closeOnClick"
      :closeOnContentClick="closeOnContentClick"
      :left="left"
      :offset-x="offsetX"
      :offset-y="offsetY"
      :position-x="positionX"
      :position-y="positionY"
      :right="right"
      :rounded="rounded"
      :tile="tile"
      :top="top"
      :z-index="zIndex"
      @input="onInput"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          :absolute="absolute"
          :block="block"
          :bottom="bottom"
          :color="color"
          :depressed="depressed"
          :disabled="disabled"
          :fab="fab"
          :fixed="fixed"
          :icon="icon"
          :large="large"
          :left="left"
          :outlined="outlined"
          :plain="plain"
          :right="right"
          :rounded="rounded"
          :small="small"
          :tile="tile"
          :top="top"
          :x-large="larger"
          :x-small="smaller"
          v-bind="attrs"
          v-on="on"
        >
          <slot></slot>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="`z_dropdown_${ index }`"
          link
          @click="onClick($event, item)"
        >
          <v-list-item-title>{{ item.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
	import BtnMixins from '../mixins/BtnMixins'

  export default {
    name: 'ZDropdown',
		mixins: [BtnMixins],

    props: {
      auto: {
        type: Boolean,
        default: false
      },

      bottom: {
        type: Boolean,
        default: false
      },

      closeOnClick: {
        type: Boolean,
        default: true
      },

      closeOnContentClick: {
        type: Boolean,
        default: true
      },

      left: {
        type: Boolean,
        default: false
      },

      offsetX: {
        type: Boolean,
        default: false
      },

      offsetY: {
        type: Boolean,
        default: false
      },

      options: {
        type: Array,
        required: false
      },

      positionX: {
        type: Number,
        required: false
      },

      positionY: {
        type: Number,
        required: false
      },

      right: {
        type: Boolean,
        default: false
      },

      rounded: {
        type: Boolean,
        required: false
      },

      tile: {
        type: Boolean,
        default: false
      },

      top: {
        type: Boolean,
        default: false
      },  

      zIndex: {
        type: [Number, String],
        required: false
      }
    },

    data() {
      return {
        items: []
      }
    },

    methods: {
      onClick(event, { value }) {
        event.customValue = value
        this.$emit('click', event)
      },

      onInput(input) {
        this.$emit('input', input)
      },

      _setOptions() {
        if(isArray(this.options) && isYummy(this.options)) {
          this.items = this.options
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