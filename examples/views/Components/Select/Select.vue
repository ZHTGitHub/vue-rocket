<template>
  <div class="z-demo-select">
    <h4 class="mb-8 text-h4">Select 选择器</h4>

    <usage-examples></usage-examples>

    <select-attributes></select-attributes>

    <select-methods></select-methods>
  </div>
</template>

<script>
  export default {
    name: 'ZDemoSelect',

    components: {
      'usage-examples': () => import('./UsageExamples'),
      'select-attributes': () => import('./SelectAttributes'),
      'select-methods': () => import('./SelectMethods')
    }
  }
</script>

<style scoped>
  
</style>