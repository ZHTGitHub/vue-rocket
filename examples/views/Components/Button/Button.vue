<template>
  <div class="z-demo-button">
    <h4 class="mb-8 text-h4">{{ $route.meta.title }}</h4>

    <usage-examples></usage-examples>

    <button-attributes></button-attributes>

    <button-methods></button-methods>
  </div>
</template>

<script>
  export default {
    name: 'ZDemoButton',

    components: {
      'usage-examples': () => import('./UsageExamples.vue'),
      'button-attributes': () => import('./ButtonAttributes.vue'),
      'button-methods': () => import('./ButtonMethods.vue')
    }
  }
</script>

<style scoped>
  
</style>