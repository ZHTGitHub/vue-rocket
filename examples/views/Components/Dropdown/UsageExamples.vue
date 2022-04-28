<template>
  <div class="usage-examples">
    <z-dropdown :items="items"></z-dropdown>
  </div>
</template>

<script>
  export default {
    name: 'UsageExamples',

    data() {
      return {
        items: []
      }
    },

    created() {
      for(let i = 0; i < 300; i+=1) {
        this.items.push({ label: `item${ i }`, value: `${ i }` })
      }
    },
  }
</script>