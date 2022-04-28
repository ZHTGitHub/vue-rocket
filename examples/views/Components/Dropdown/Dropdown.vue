<template>
  <div class="z-demo-dropdown">
    <typing-title :title="$route.meta.title"></typing-title>
    
    <usage-examples></usage-examples>

    <dropdown-attributes></dropdown-attributes>

    <dropdown-slots></dropdown-slots>
  </div>
</template>

<script>
  export default {
    name: 'ZDemoDropdown',

    components: {
      'usage-examples': () => import('./UsageExamples'),
      'dropdown-attributes': () => import('./DropdownAttributes'),
      'dropdown-slots': () => import('./DropdownSlots'),
    }
  }
</script>