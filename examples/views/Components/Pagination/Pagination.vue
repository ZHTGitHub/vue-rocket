<template>
  <div class="z-demo-pagination">
    <h4 class="mb-8 text-h4">{{ $route.meta.title }}</h4>

    <usage-examples></usage-examples>

    <pagination-attributes></pagination-attributes>

    <pagination-methods></pagination-methods>
  </div>
</template>

<script>
  export default {
    name: 'ZDemoPagination',

    components: {
      'usage-examples': () => import('./UsageExamples'),
      'pagination-attributes': () => import('./PaginationAttributes'),
      'pagination-methods': () => import('./PaginationMethods')
    }
  }
</script>

<style scoped>
  
</style>