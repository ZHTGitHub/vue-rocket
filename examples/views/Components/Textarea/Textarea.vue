<template>
  <div class="z-demo-textarea">
    <typing-title :title="$route.meta.title"></typing-title>

    <usage-examples></usage-examples>

    <textarea-attributes></textarea-attributes>

    <textarea-methods></textarea-methods>

    <textarea-slots></textarea-slots>
  </div>
</template>

<script>
  export default {
    name: 'ZDemoTextarea',

    components: {
      'usage-examples': () => import('./UsageExamples'),
      'textarea-attributes': () => import('./TextareaAttributes'),
      'textarea-methods': () => import('./TextareaMethods'),
      'textarea-slots': () => import('./TextareaSlots')
    }
  }
</script>