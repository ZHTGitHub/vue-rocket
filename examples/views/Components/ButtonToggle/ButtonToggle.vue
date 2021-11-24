<template>
  <div class="z-demo-button-toggle">
    <typing-title :title="$route.meta.title"></typing-title>

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