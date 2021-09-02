<template>
  <div class="main-layout">
    <v-app-bar app elevation="1" clipped-left style="z-index: 7">
      <v-app-bar-nav-icon @click="onToggle"></v-app-bar-nav-icon>
      <v-toolbar-title>Vue Rocket</v-toolbar-title>
    </v-app-bar>

    <z-drawer 
      ref="drawer"
      :menus="menus"
      app
    ></z-drawer>

    <v-main>
      <v-container>
        <slot></slot>
      </v-container>
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