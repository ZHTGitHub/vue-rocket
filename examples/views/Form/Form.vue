<template>
  <div class="demo-form">
    <main-layout>
      <v-container>
        <router-view></router-view>
      </v-container>
    </main-layout>
  </div>
</template>

<script>
  

  export default {
    name: 'ZDemoForm',

    components: {
      'main-layout': () => import('../../layouts/MainLayout')
    }
  }
</script>