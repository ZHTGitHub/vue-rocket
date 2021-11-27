<template>
  <div class="plugins">
    <main-layout>
      <router-view></router-view>
    </main-layout>
  </div>
</template>

<script>
  export default {
    name: 'Plugins',

    components: {
      'main-layout': () => import('../../layouts/MainLayout')
    }
  }
</script>