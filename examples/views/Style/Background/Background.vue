<template>
  <div class="demo-background">
    <typing-title :title="$route.meta.title"></typing-title>

    <!-- 深色背景 BEGIN -->
    <div class="z-flex flex-wrap squares">
      <div
        class="pa-3"
        v-for="(item, index) in bgDeepList" 
        :key="`elevation_${ index }`"
      >
        <div 
          class="z-flex flex-column justify-center align-center rounded-md elevation-2 square" 
          :class="item.class"
        >
          <span>{{ item.label }}</span>
          <span>{{ item.class }}</span>
        </div>
      </div>
    </div>
    <!-- 深色背景 END -->
    
    <!-- 浅色背景 BEGIN -->
    <div class="z-flex flex-wrap squares">
      <div
        class="pa-3"
        v-for="(item, index) in bgLightList" 
        :key="`elevation_${ index }`"
      >
        <div 
          class="z-flex flex-column justify-center align-center rounded-md elevation-2 square" 
          :class="item.class"
        >
          <span>{{ item.label }}</span>
          <span>{{ item.class }}</span>
        </div>
      </div>
    </div>
    <!-- 浅色背景 END -->

    <!-- 渐变背景 BEGIN -->
    <div class="z-flex flex-wrap squares">
      <div
        class="pa-3"
        v-for="(item, index) in bgGradualList" 
        :key="`elevation_${ index }`"
      >
        <div 
          class="z-flex flex-column justify-center align-center rounded-md elevation-2 square" 
          :class="item.class"
        >
          <span>{{ item.label }}</span>
          <span>{{ item.class }}</span>
        </div>
      </div>
    </div>
    <!-- 渐变背景 END -->
  </div>
</template>

<script>
  import { bgDeepList, bgLightList, bgGradualList } from './cells'

  export default {
    name: 'DemoStyleElevation',
    data() {
      return {
        bgDeepList,
        bgLightList,
        bgGradualList
      }
    }
  }
</script>

<style scoped lang="scss">
  .squares {
    max-width: 1200px;
    border: 1px solid transparent;
    
    .square {
      width: 140px;
      height: 70px;
      font-size: .875rem;
    }
  }
</style>