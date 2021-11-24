<template>
  <div class="z-demo-upload">
    <typing-title :title="$route.meta.title"></typing-title>
    
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