<template>
  <div class="main-layout">
    <z-drawer></z-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <slot></slot>
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