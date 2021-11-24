<template>
  <div class="z-demo-pagination">
    <typing-title :title="$route.meta.title"></typing-title>

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