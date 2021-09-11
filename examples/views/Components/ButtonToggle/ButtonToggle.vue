<template>
  <div class="z-demo-button-toggle">
    <h4 class="mb-8 text-h4">{{ $route.meta.title }}</h4>

    <usage-examples></usage-examples>

    <button-toggle-attributes></button-toggle-attributes>

    <button-toggle-methods></button-toggle-methods>
  </div>
</template>

<script>
  export default {
    name: 'ZDemoButtonToggle',

    components: {
      'usage-examples': () => import('./UsageExamples'),
      'button-toggle-attributes': () => import('./ButtonToggleAttributes'),
      'button-toggle-methods': () => import('./ButtonToggleMethods')   
    }
  }
</script>