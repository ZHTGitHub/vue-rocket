<template>
  <div class="z-demo-switch">
    <h4 class="mb-8 text-h4">{{ $route.meta.title }}</h4>

    <usage-examples></usage-examples>

    <switch-attributes></switch-attributes>

    <switch-methods></switch-methods>
  </div>
</template>

<script>
  export default {
    name: 'ZDemoSwitch',

    components: {
      'usage-examples': () => import('./UsageExamples'),
      'switch-attributes': () => import('./SwitchAttributes'),
      'switch-methods': () => import('./SwitchMethods')
    }
  }
</script>

<style scoped>
  
</style>