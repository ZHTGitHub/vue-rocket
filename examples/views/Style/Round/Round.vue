<template>
  <div class="demo-round">
    <typing-title :title="$route.meta.title"></typing-title>
    
    <div class="z-flex flex-wrap squares">
      <div
        class="pa-3"
        v-for="(item, index) in roundList" 
        :key="` round_${ index }`"
      >
        <div 
          class="z-flex justify-center align-center bg-cyan square" 
          :class="item.class"
        >
          {{ item.class }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { roundList } from './cells'

  export default {
    name: 'DemoStyleRound',

    data() {
      return {
        roundList
      }
    }
  }
</script>

<style scoped lang="scss">
  .squares {
    .square {
      width: 120px;
      height: 120px;
      font-size: .875rem;

      &.rounded-pill {
        margin-top: 30px;
        height: 60px;
      }
    }
  }
</style>