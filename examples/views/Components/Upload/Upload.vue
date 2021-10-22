<template>
  <div class="z-demo-upload">
    <h4 class="mb-8 text-h4">{{ $route.meta.title }}</h4>
    
    <usage-examples></usage-examples>

    <upload-attributes></upload-attributes>

    <upload-methods></upload-methods>
  </div>
</template>

<script>
  export default {
    name: 'ZDemoUpload',

    components: {
      'usage-examples': () => import('./UsageExamples.vue'),
      'upload-attributes': () => import('./UploadAttributes.vue'),
      'upload-methods': () => import('./UploadMethods.vue')
    }
  }
</script>