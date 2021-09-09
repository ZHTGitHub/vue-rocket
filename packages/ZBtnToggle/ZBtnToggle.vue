<template>
  <div class="z-btn-toggle z-input">
    <v-btn-toggle 
      v-model="value"
      borderless
    >
      <v-btn
        v-for="(item, index) in items"
        :key="`z_btn_toggle_${ index }`"
        :value="item.value"
      >
        <span>{{ item.label }}</span>
      </v-btn>
    </v-btn-toggle>
  </div>
</template>

<script>
  import FormMixins from '../mixins/FormMixins'
  import FormValidationMixins from '../mixins/FormValidationMixins'

  export default {
    name: 'ZBtnToggle',
    mixins: [FormMixins, FormValidationMixins],

    props: {
      options: {
        type: Array,
        required: true
      }
    },

    data() {
      return {
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
      value: {
        handler(value) {
          console.log(value)
        },
        immediate: true
      }
    }
  }
</script>