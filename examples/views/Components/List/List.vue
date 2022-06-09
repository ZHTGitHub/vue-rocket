<template>
  <div class="z-demo-list">
    <typing-title :title="$route.meta.title"></typing-title>

    <usage-examples></usage-examples>

    <list-attributes></list-attributes>

    <list-methods></list-methods>
  </div>
</template>

<script>
  export default {
    name: 'ZDemoList',

    components: {
      'usage-examples': () => import('./UsageExamples'),
      'list-attributes': () => import('./ListAttributes'),
      'list-methods': () => import('./ListMethods')
    }
  }
</script>

<style scoped>
  
</style>