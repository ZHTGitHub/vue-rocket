<template>
  <div class="z-demo-switch">
    <typing-title :title="$route.meta.title"></typing-title>

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