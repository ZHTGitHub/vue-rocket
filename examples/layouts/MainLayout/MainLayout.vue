<template>
  <div class="main-layout">
    <z-header></z-header>

    <div class="z-flex z-main">
      <z-sidebar v-show="showSidebar"></z-sidebar>

      <div :class="['pa-6 z-container', showSidebar ? 'with-sidebar' : '']">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MainLayout',

    props: {
      showSidebar: {
        type: Boolean,
        default: true
      }
    },

    components: {
      'z-header': () => import('./header'),
      'z-sidebar': () => import('./sidebar')
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