<template>
  <div class="demo-components">
    <main-layout>
      <router-view></router-view>
    </main-layout>
  </div>
</template>

<script>
  export default {
    name: 'DemoComponents',

    components: {
      'main-layout': () => import('../../layouts/MainLayout')
    }
  }
</script>