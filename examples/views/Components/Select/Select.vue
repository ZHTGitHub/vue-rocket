<template>
  <div class="z-demo-select">
    <typing-title :title="$route.meta.title"></typing-title>

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