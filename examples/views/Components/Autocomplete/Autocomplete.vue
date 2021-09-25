<template>
  <div class="z-demo-autocomplete">
    <h4 class="mb-8 text-h4">{{ $route.meta.title }}</h4>

    <usage-examples></usage-examples>

    <autocomplete-attributes></autocomplete-attributes>

    <autocomplete-methods></autocomplete-methods>
  </div>
</template>

<script>
  export default {
    name: 'ZDemoAutocomplete',

    components: {
      'usage-examples': () => import('./UsageExamples.vue'),
      'autocomplete-attributes': () => import('./AutocompleteAttributes.vue'),
      'autocomplete-methods': () => import('./AutocompleteMethods.vue')
    }
  }
</script>

<style scoped>
  
</style>