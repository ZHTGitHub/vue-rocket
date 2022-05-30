<template>
  <div class="z-virtual-scroll">
    <div 
      ref="viewport"
      class="viewport" 
      @scroll="onScroll"
    > 
      <div 
        class="list-phantom" 
        :style="{ height: `${ phantomHeight }px` }"
      ></div> 

      <div 
        class="list-area"
        :style="{
          transform: `translateY(${ startOffset }px)`
        }"
      > 
        <template v-for="(item, index) in list">
          <div 
            v-if="isBetweenViewRanges(index)"
            :key="index"
            class="list-item" 
            :style="{
              height: `${ itemHeight }px`
            }"
          >{{ item.label }}</div>
        </template>
      </div>
  </div>
  </div>
</template>

<script>
  import { tools } from '../../packages/scripts/utils'

  export default {
    name: 'ZVirtualScroll',

    data() {
      return {
        list: [],

        // 每项列表的高度
        itemHeight: 100,

        // 列表总高度
        phantomHeight: 0,

        // 渲染数量
        viewCount: 10,

        // 开始index
        startIndex: 0,

        // 结束index
        endIndex: 0,

        // 偏移量
        startOffset: 0
      }
    },

    created() {
      for(let i = 0; i < 100; i+=1) {
        this.list.push({ label: `列表${ i + 1 }` })
      }

      this.phantomHeight = this.list.length * this.itemHeight
    },

    methods: {
      onScroll() {
        const scrollTop = this.$refs.viewport.scrollTop
        this.startIndex = this.getStartIndex(scrollTop)
        this.startOffset = this.getStartOffset(this.startIndex)
      },

      // 获取startIndex
      getStartIndex(scrollTop) {
        return Math.floor(scrollTop / this.itemHeight)
      },
      
      // 获取startOffset
      getStartOffset(startIndex) {
        return startIndex * this.itemHeight
      },

      // 是否在显示范围之间
      isBetweenViewRanges(index) {
        return index >= this.startIndex && index <= this.endIndex
      }
    },

    watch: {
      startIndex: {
        handler(startIndex) {
          this.endIndex = startIndex + this.viewCount 
        },
        immediate: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .viewport {
    position: relative;
    height: 40vh;
    overflow-y: auto;
  }

  .list-phantom {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .list-item {
    color: #555;
    box-sizing: border-box;
    border-bottom: 1px solid #999;
  }
</style>