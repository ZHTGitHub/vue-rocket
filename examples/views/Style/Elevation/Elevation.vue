<template>
  <div class="demo-elevation">
    <typing-title :title="$route.meta.title"></typing-title>

    <div class="mb-16">
      <v-alert
        border="left"
        colored-border
        :color="color"
        dense
        elevation="1"
      >默认海拔</v-alert>

      <div class="z-flex flex-wrap ml-n4 squares">
        <div
          class="pa-4"
          v-for="(item, index) in elevationList" 
          :key="`elevation_${ index }`"
        >
          <div 
            class="z-flex justify-center align-center rounded-md bg-cyan square" 
            :class="item.class"
          >
            {{ item.class }}
          </div>
        </div>
      </div>
    </div>

    <div>
      <v-alert
        border="left"
        colored-border
        :color="color"
        dense
        elevation="1"
      >翘边海拔</v-alert>

      <div class="z-flex flex-wrap ml-n4 squares">
        <div
          class="pa-4"
          v-for="(item, index) in wrapElevationList" 
          :key="`elevation_${ index }`"
        >
          <div 
            class="z-flex flex-column justify-center align-center rounded-md bg-cyan square" 
            :class="item.class"
          >
            <span>elevation-wrap</span>
            <span>{{ item.class }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { elevationList, wrapElevationList } from './cells'

  export default {
    name: 'DemoStyleElevation',

    data() {
      return {
        elevationList,
        wrapElevationList,

        color: 'text-blue'
      }
    }
  }
</script>

<style scoped lang="scss">
  .squares {
    .square {
      width: 120px;
      height: 70px;
      font-size: .875rem;
    }
  }
</style>