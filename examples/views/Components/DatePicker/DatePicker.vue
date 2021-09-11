<template>
  <div class="z-demo-date-picker">
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