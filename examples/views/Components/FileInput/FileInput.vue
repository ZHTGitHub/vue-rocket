<template>
  <div class="z-demo-file-input">
    <h4 class="mb-8 text-h4">{{ $route.meta.title }}</h4>

    <usage-examples></usage-examples>

    <file-input-attributes></file-input-attributes>

    <file-input-methods></file-input-methods>

    <file-input-slots></file-input-slots>
  </div>
</template>

<script>
  export default {
    name: 'ZDemoFileInput',

    components: {
      'usage-examples': () => import('./UsageExamples'),
      'file-input-attributes': () => import('./FileInputAttributes'),
      'file-input-methods': () => import('./FileInputMethods'),
      'file-input-slots': () => import('./FileInputSlots.vue')
    }
  }
</script>