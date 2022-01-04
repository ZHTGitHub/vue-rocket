<template>
  <div class="z-demo-draw-image">
    <typing-title :title="$route.meta.title"></typing-title>

    <usage-examples></usage-examples>

    <draw-image-attributes></draw-image-attributes>

    <draw-image-methods></draw-image-methods>
  </div>
</template>

<script>
  export default {
    name: 'ZDemoDrawImage',

    components: {
      'usage-examples': () => import('./UsageExamples.vue'),
      'draw-image-attributes': () => import('./DrawImageAttributes.vue'),
      'draw-image-methods': () => import('./DrawImageMethods.vue')
    }
  }
</script>

<style scoped>
  
</style>