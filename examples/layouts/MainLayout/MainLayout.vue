<template>
  <div class="main-layout">
    <ZHeader />

    <!-- <v-main> -->
      <div class="z-flex z-main">
        <ZSidebar />

        <div class="pa-6 z-container">
          <slot></slot>
        </div>
      </div>
    <!-- </v-main> -->
  </div>
</template>

<script>
  import ZHeader from './header'
  import ZSidebar from './sidebar'

  export default {
    name: 'MainLayout',

    components: {
      ZHeader,
      ZSidebar
    }
  }
</script>

<style lang="scss">
  .main-layout {
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    .z-main {
      padding-top: 64px;
      height: 100vh;
      overflow: hidden;

      .z-container {
        padding-bottom: 120px !important;
        height: 100%;
        width: calc(100vw - 256px);
        overflow-x: hidden;
        overflow-y: auto;
      }
    }
  }
  
</style>