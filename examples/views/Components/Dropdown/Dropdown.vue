<template>
  <div class="z-demo-dropdown">
    <typing-title :title="$route.meta.title"></typing-title>

    <usage-examples></usage-examples>

    <dropdown-attributes></dropdown-attributes>

    <dropdown-methods></dropdown-methods>
  </div>
</template>

<script>
  export default {
    name: 'ZDemoDropdown',

    components: {
      'usage-examples': () => import('./UsageExamples.vue'),
      'dropdown-attributes': () => import('./DropdownAttributes.vue'),
      'dropdown-methods': () => import('./DropdownMethods.vue')
    }
  }
</script>

<style scoped>
  
</style>