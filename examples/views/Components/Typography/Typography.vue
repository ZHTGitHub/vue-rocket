<template>
  <div class="z-demo-typograhpy">
    <typing-title :title="$route.meta.title"></typing-title>
    
    <ZTypography.Title 
      :level="2"
      editable
    >
      vue rocket
    </ZTypography.Title>
  </div>
</template>

<script>
  export default {
    name: 'ZDemoTypograhpy',

    methods: {
      onClick() {
        alert()
      }
    }
  }
</script>