<template>
  <div class="z-demo-input">
    <typing-title :title="$route.meta.title"></typing-title>

    <usage-examples></usage-examples>

    <input-attributes></input-attributes>

    <input-methods></input-methods>

    <input-slots></input-slots>
  </div>
</template>

<script>
  export default {
    name: 'ZDemoInput',

    components: {
      'usage-examples': () => import('./UsageExamples'),
      'input-attributes': () => import('./InputAttributes'),
      'input-methods': () => import('./InputMethods'),
      'input-slots': () => import('./InputSlots.vue')
    }
  }
</script>