<template>
  <div class="z-demo-date-picker">
    <typing-title :title="$route.meta.title"></typing-title>
    
    <usage-examples></usage-examples>

    <date-picker-attributes></date-picker-attributes>

    <date-picker-slots></date-picker-slots>
  </div>
</template>

<script>
  export default {
    name: 'ZDemoDatePicker',

    components: {
      'usage-examples': () => import('./UsageExamples'),
      'date-picker-attributes': () => import('./DatePickerAttributes'),
      'date-picker-slots': () => import('./DatePickerSlots'),
    }
  }
</script>