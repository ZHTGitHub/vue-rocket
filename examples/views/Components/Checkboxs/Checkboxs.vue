<template>
  <div class="z-demo-checkboxs">
    <typing-title :title="$route.meta.title"></typing-title>

    <usage-examples></usage-examples>

    <checkboxs-attributes></checkboxs-attributes>

    <checkboxs-methods></checkboxs-methods>

    <checkbox-slots></checkbox-slots>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'

  export default {
    name: 'ZDemoCheckboxs',

    mounted() {
      Prism.highlightAll()
    },

    components: {
      'usage-examples': () => import('./UsageExamples'),
      'checkboxs-attributes': () => import('./CheckboxsAttributes'),
      'checkboxs-methods': () => import('./CheckboxsMethods'),
      'checkbox-slots': () => import('./CheckboxsSlots.vue')
    }
  }
</script>