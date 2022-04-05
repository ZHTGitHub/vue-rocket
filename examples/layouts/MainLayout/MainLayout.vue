<template>
  <div class="main-layout">
    <ZHeader />

    <div class="z-flex z-main">
      <ZSidebar v-show="showSidebar" />

      <div 
        class="pa-6 z-container"
        :class="showSidebar ? 'with-sidebar' : ''"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import ZHeader from './header'
  import ZSidebar from './sidebar'

  export default {
    name: 'MainLayout',

    props: {
      showSidebar: {
        type: Boolean,
        default: true
      }
    },

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
        width: 100vw;
        overflow-x: hidden;
        overflow-y: auto;

        &.with-sidebar {
          width: calc(100vw - 256px);
        }
      }
    }
  }
  
</style>