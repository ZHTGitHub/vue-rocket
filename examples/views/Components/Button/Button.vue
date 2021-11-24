<template>
  <div class="z-demo-button">
    <typing-title :title="$route.meta.title"></typing-title>

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