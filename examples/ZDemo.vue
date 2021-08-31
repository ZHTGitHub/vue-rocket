<template>
  <div class="z-demo py-4 px-4">
    <main-layout>
      <router-view></router-view>
    </main-layout>
  </div>
</template>

<script>
  import MainLayout from '@/layouts/MainLayout'

  export default {
    name: 'ZDemo',
    components: {
      MainLayout
    }
  }
</script>