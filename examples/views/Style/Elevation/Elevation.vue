<template>
  <div class="demo-elevation">
    <typing-title :title="$route.meta.title"></typing-title>

    <div class="z-flex flex-wrap justify-center pa-3 ma-auto squares">
      <div
        class="pa-3"
        v-for="(item, index) in elevation" 
        :key="`elevation_${ index }`"
      >
        <div 
          class="z-flex justify-center align-center rounded-md square" 
          :class="item.class"
        >
          .{{ item.class }}
        </div>
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

<style scoped lang="scss">
  .squares {
    max-width: 650px;
    border: 1px solid transparent;
    
    .square {
      width: 100px;
      height: 100px;
      background-color: #5cbbf6;
      color: #fff;
      font-size: .875rem;
    }
  }
</style>