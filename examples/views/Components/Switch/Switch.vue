<template>
  <div class="z-demo-switch">
    <h4 class="mb-8 text-h4">Switch 开关</h4>

    <usage-examples></usage-examples>

    <switch-attributes></switch-attributes>
  </div>
</template>

<script>
  export default {
    name: 'ZDemoSwitch',

    components: {
      'usage-examples': () => import('./UsageExamples'),
      'switch-attributes': () => import('./SwitchAttributes')
    }
  }
</script>

<style scoped>
  
</style>