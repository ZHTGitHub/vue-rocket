<template>
  <div class="demo-style">
    <main-layout>
      <router-view></router-view>
    </main-layout>
  </div>
</template>

<script>
  export default {
    name: 'DemoStyle',

    components: {
      'main-layout': () => import('../../layouts/MainLayout')
    }
  }
</script>