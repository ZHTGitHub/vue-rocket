<template>
  <div class="z-demo-select">
    <h4 class="mb-8 text-h4">{{ $route.meta.title }}</h4>

    <usage-examples></usage-examples>

    <select-attributes></select-attributes>

    <select-methods></select-methods>

    <select-slots></select-slots>
  </div>
</template>

<script>
  export default {
    name: 'ZDemoSelect',

    components: {
      'usage-examples': () => import('./UsageExamples'),
      'select-attributes': () => import('./SelectAttributes'),
      'select-methods': () => import('./SelectMethods'),
      'select-slots': () => import('./SelectSlots')
    }
  }
</script>

<style scoped>
  
</style>