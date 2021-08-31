<template>
  <div class="main-layout">
    <z-drawer></z-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Vue Rocket</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <div class="z-main">
        <slot></slot>
      </div>
    </v-main>
  </div>
</template>

<script>
  export default {
    name: 'MainLayout',
    components: {
      'z-drawer': () => import('./ZDrawer')
    }
  }
</script>