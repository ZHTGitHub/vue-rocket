<template>
  <div class="z-demo-checkbox">
    <typing-title :title="$route.meta.title"></typing-title>

    <usage-examples></usage-examples>

    <checkbox-attributes></checkbox-attributes>

    <checkbox-methods></checkbox-methods>

    <checkbox-slots></checkbox-slots>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'

  export default {
    name: 'ZDemoCheckbox',

    mounted() {
      Prism.highlightAll()
    },

    components: {
      'usage-examples': () => import('./UsageExamples'),
      'checkbox-attributes': () => import('./CheckboxAttributes'),
      'checkbox-methods': () => import('./CheckboxMethods'),
      'checkbox-slots': () => import('./CheckboxSlots.vue')
    }
  }
</script>