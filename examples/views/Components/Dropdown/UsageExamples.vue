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
        items: [
          { label: 'item1', value: '1' }
        ]
      }
    },

    created() {
      for(let i = 0; i < 20; i+=1) {
        this.items.push({ label: `item${ i + 1 }`, value: `${ i + 1 }` })
      }
    },
  }
</script>