<template>
  <div class="z-demo-input">
    <h4 class="mb-8 text-h4">Input 输入框</h4>

    <usage-examples></usage-examples>

    <input-attributes></input-attributes>

    <input-methods></input-methods>
  </div>
</template>

<script>
  export default {
    name: 'ZDemoInput',

    components: {
      'usage-examples': () => import('./UsageExamples'),
      'input-attributes': () => import('./InputAttributes'),
      'input-methods': () => import('./InputMethods')
    }
  }
</script>