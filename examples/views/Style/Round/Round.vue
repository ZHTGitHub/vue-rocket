<template>
  <div class="demo-round">
    <typing-title :title="$route.meta.title"></typing-title>
    
    <div class="z-flex flex-wrap pa-3 ma-auto squares">
      <div
        class="pa-3"
        v-for="(item, index) in round" 
        :key="` round_${ index }`"
      >
        <div 
          class="z-flex justify-center align-center square" 
          :class="item.class"
        >
          .{{ item.class }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { round } from './cells'

  export default {
    name: 'DemoStyleRound',

    data() {
      return {
        round
      }
    }
  }
</script>

<style scoped lang="scss">
  .squares {
    max-width: 650px;
    border: 1px solid transparent;
    
    .square {
      width: 120px;
      height: 120px;
      background-color: #5cbbf6;
      color: #fff;
      font-size: .875rem;
      &.rounded-pill {
        margin-top: 30px;
        height: 60px;
      }
    }
  }
</style>