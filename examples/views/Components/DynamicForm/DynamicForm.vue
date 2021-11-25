<template>
  <div class="z-demo-dynamic-form">
    <typing-title :title="$route.meta.title"></typing-title>

    <usage-examples></usage-examples>

    <dynamic-form-attributes></dynamic-form-attributes>

    <dynamic-form-methods></dynamic-form-methods>
  </div>
</template>

<script>
  export default {
    name: 'ZDemoDynamicForm',

    components: {
      'usage-examples': () => import('./UsageExamples.vue'),
      'dynamic-form-attributes': () => import('./DynamicFormAttributes.vue'),
      'dynamic-form-methods': () => import('./DynamicFormMethods.vue')
    }
  }
</script>

<style scoped>
  
</style>