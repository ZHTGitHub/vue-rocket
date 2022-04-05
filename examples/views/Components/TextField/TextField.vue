<template>
  <div class="z-demo-text-field">
    <typing-title :title="$route.meta.title"></typing-title>

    <usage-examples></usage-examples>

    <attributes></attributes>

    <methods></methods>

    <slots></slots>
  </div>
</template>

<script>
  export default {
    name: 'ZDemoTextField',

    components: {
      'usage-examples': () => import('./UsageExamples'),
      'attributes': () => import('./Attributes'),
      'methods': () => import('./Methods'),
      'slots': () => import('./Slots.vue')
    }
  }
</script>