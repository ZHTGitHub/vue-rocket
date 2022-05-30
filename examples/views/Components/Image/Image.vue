<template>
  <div class="z-demo-image">
    <typing-title :title="$route.meta.title"></typing-title>

    <usage-examples></usage-examples>

    <image-attributes></image-attributes>

    <!-- <image-methods></image-methods>

    <image-slots></image-slots> -->
  </div>
</template>

<script>
  export default {
    name: 'ZDemoImage',

    components: {
      'usage-examples': () => import('./UsageExamples'),
      'image-attributes': () => import('./ImageAttributes'),
      'image-methods': () => import('./ImageMethods'),
      'image-slots': () => import('./ImageSlots.vue')
    }
  }
</script>