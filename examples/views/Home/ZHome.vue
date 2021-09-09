<template>
  <div class="z-home">
    <main-layout>233</main-layout>
  </div>
</template>

<script>
  export default {
    name: 'ZHome',

    components: {
      'main-layout': () => import('../../layouts/MainLayout')
    }
  }
</script>