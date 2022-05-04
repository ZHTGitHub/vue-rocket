<template>
  <div class="usage-examples">
    <!-- <v-text-field v-model="value" @keyup="handleInput"></v-text-field> -->
    
    <z-dropdown 
      limit="5"
      :value="value"
      :items="items"
    ></z-dropdown>
  </div>
</template>

<script>
  export default {
    name: 'UsageExamples',

    data() {
      return {
        value: '',
        items: []
      }
    },

    created() {
      for(let i = 0; i < 30; i+=1) {
        this.items.push({ label: `item${ i }`, value: `${ i }` })
      }
    },

    methods: {
      handleInput(event) {
        this.value = event.target.value
      }
    }
  }
</script>