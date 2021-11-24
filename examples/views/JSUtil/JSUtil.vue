<template>
  <div class="js-util">
    <main-layout>
      <router-view></router-view>
    </main-layout>
  </div>
</template>

<script>
  export default {
    name: 'JSUtil',

    components: {
      'main-layout': () => import('../../layouts/MainLayout')
    }
  }
</script>