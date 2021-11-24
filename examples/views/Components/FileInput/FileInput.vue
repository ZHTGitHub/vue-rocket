<template>
  <div class="z-demo-file-input">
    <typing-title :title="$route.meta.title"></typing-title>

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