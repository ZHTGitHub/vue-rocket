<template>
  <div class="z-demo-date-picker">
    <h4 class="mb-8 text-h4">{{ $route.meta.title }}</h4>
    
    <usage-examples></usage-examples>

    <date-picker-attributes></date-picker-attributes>
  </div>
</template>

<script>
  export default {
    name: 'ZDemoDatePicker',

    components: {
      'usage-examples': () => import('./UsageExamples'),
      'date-picker-attributes': () => import('./DatePickerAttributes.vue') 
    }
  }
</script>