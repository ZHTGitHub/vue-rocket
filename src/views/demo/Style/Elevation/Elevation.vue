<template>
  <div class="demo-elevation z-flex flex-wrap justify-center pa-3 ma-auto">

    <div
      class="pa-3"
      v-for="(item, index) in elevation" 
      :key="`elevation_${ index }`"
    >
      <div 
        class="elevation z-flex justify-center align-center rounded-md" 
        :class="item.class"
      >
        .{{ item.class }}
      </div>
    </div>
    
  </div>
</template>

<script>
  import { elevation } from './cells'

  export default {
    name: 'DemoStyleElevation',
    data() {
      return {
        elevation
      }
    }
  }
</script>

<style scoped>
  .demo-elevation {
    max-width: 650px;
    border: 1px solid transparent;
  }

  .elevation {
    width: 100px;
    height: 100px;
    background-color: #5cbbf6;
    font-size: .875rem;
  }
</style>