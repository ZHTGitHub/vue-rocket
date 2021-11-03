<template>
  <div class="z-demo-calendar">
    <h4 class="mb-8 text-h4">{{ $route.meta.title }}</h4>

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