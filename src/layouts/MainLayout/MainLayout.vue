<template>
  <div class="main-layout">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      233
    </v-navigation-drawer>

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
    data() {
      return {
        drawer: null
      }
    }
  }
</script>