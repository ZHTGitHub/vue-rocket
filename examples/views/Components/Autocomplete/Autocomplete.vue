<template>
  <div class="z-demo-autocomplete">
    <h4 class="mb-8 text-h4">{{ $route.meta.title }}</h4>

    <usage-examples></usage-examples>

    <autocomplete-attributes></autocomplete-attributes>

    <autocomplete-methods></autocomplete-methods>

    <autocomplete-slots></autocomplete-slots>
  </div>
</template>

<script>
  export default {
    name: 'ZDemoAutocomplete',

    components: {
      'usage-examples': () => import('./UsageExamples.vue'),
      'autocomplete-attributes': () => import('./AutocompleteAttributes.vue'),
      'autocomplete-methods': () => import('./AutocompleteMethods.vue'),
      'autocomplete-slots': () => import('./AutocompleteSlots.vue')
    }
  }
</script>

<style scoped>
  h4 {
    border-right: 3px solid #333;
    width: 300px;
    /* width: 26ch; */
    white-space: nowrap;
    overflow: hidden;
    animation: typing 3s steps(25, end), 
    cursor-blink .5s step-end infinite alternate;
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes cursor-blink {
    50% {
      border-color: transparent;
    }
  }
</style>