<template>
  <div class="z-virtual-scroll">
    <typing-title :title="$route.meta.title"></typing-title>
    
    <usage-examples></usage-examples>

    <attributes></attributes>

    <slots></slots>
  </div>
</template>

<script>
  export default {
    name: 'ZVirtualScroll',

    components: {
      'usage-examples': () => import('./UsageExamples'),
      'attributes': () => import('./Attributes'),
      'slots': () => import('./Slots'),
    }
  }
</script>