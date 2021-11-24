<template>
  <div class="z-demo-calendar">
    <typing-title :title="$route.meta.title"></typing-title>

    <usage-examples></usage-examples>

    <calendar-attributes></calendar-attributes>

    <calendar-methods></calendar-methods>
  </div>
</template>

<script>
  export default {
    name: 'ZDemoCalendar',

    components: {
      'usage-examples': () => import('./UsageExamples'),
      'calendar-attributes': () => import('./CalendarAttributes'),
      'calendar-methods': () => import('./CalendarMethods')   
    }
  }
</script>