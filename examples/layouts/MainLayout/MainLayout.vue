<template>
  <div class="main-layout">
    <z-drawer 
      ref="drawer"
      :menus="menus"
    ></z-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="onToggle"></v-app-bar-nav-icon>
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
  import { menus } from './cells'

  export default {
    name: 'MainLayout',

    data() {
      return {
        menus
      }
    },

    methods: {
      onToggle() {
        this.$refs.drawer.onToggle()
      }
    }
  }
</script>