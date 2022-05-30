<template>
  <div class="usage-examples">
    <z-virtual-scroll></z-virtual-scroll>
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
      for(let i = 0; i < 50; i+=1) {
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