<template>
  <div class="main-layout">
    <v-app-bar 
      app 
      color="#fcb69f"
      dark
      clipped-left 
      elevate-on-scroll
      src="https://picsum.photos/1920/1080?random"
      style="z-index:7"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="onToggle"></v-app-bar-nav-icon>

      <v-toolbar-title>Vue Rocket</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-avatar
        class="mr-2"
        color="indigo"
        size="40"
      >
        <span class="white--text text-h6">HT</span>
      </v-avatar>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
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