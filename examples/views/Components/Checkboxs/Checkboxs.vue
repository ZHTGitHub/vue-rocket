<template>
  <div class="z-demo-checkboxs">
    <h4 class="mb-8 text-h4">{{ $route.meta.title }}</h4>

    <usage-examples></usage-examples>

    <checkboxs-attributes></checkboxs-attributes>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.js'

  export default {
    name: 'ZDemoCheckboxs',
    data() {
      return {
        hobbyOptions: [
          { label: '游泳', value: 1 },
          { label: '网球', value: 2 },
          { label: '乒乓球', value: 3 },
          { label: '羽毛球', value: 4 }
        ]
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    components: {
      'usage-examples': () => import('./UsageExamples'),
      'checkboxs-attributes': () => import('./CheckboxsAttributes')
    }
  }
</script>