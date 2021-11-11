<template>
  <div class="z-file-input z-input" :style="{ width: breadth }">
    
  </div>
</template>

<script>
  import FormMixins from '../mixins/FormMixins'
  import FormValidationMixins from '../mixins/FormValidationMixins'

  export default {
    name: 'ZFileInput',
    mixins: [FormMixins, FormValidationMixins],
  }
</script>