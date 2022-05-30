<template>
  <div class="z-demo-dropdown">
    <typing-title :title="$route.meta.title"></typing-title>
    
    <usage-examples></usage-examples>

    <virtual-scroll-attributes></virtual-scroll-attributes>

    <virtual-scroll-slots></virtual-scroll-slots>
  </div>
</template>

<script>
  export default {
    name: 'ZDemoDropdown',

    components: {
      'usage-examples': () => import('./UsageExamples'),
      'virtual-scroll-attributes': () => import('./VirtualScrollAttributes'),
      'virtual-scroll-slots': () => import('./VirtualScrollSlots'),
    }
  }
</script>