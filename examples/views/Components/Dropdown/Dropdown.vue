<template>
  <div class="z-demo-dropdown">
    <h4 class="mb-8 text-h4">{{ $route.meta.title }}</h4>

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