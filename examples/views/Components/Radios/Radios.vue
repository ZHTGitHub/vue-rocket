<template>
  <div class="z-demo-radios">
    <h4 class="mb-8 text-h4">{{ $route.meta.title }}</h4>

    <usage-examples></usage-examples>

    <radios-attributes></radios-attributes>
  </div>
</template>

<script>
  export default {
    name: 'ZDemoRadios',
    data() {
      return {
        genderOptions: [
          { label: '男性', value: 1 },
          { label: '女性', value: 2 }
        ]
      }
    },

    components: {
      'usage-examples': () => import('./UsageExamples'),
      'radios-attributes': () => import('./RadiosAttributes')
    }
  }
</script>

<style scoped>
  
</style>