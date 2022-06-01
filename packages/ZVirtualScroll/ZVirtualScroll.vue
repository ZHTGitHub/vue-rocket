<template>
  <div class="z-virtual-scroll">
    <div 
      ref="viewport"
      class="viewport" 
      :style="{ 
        width: width ? `${ width }px` : '100%',
        height: height ? `${ height }px` : '100%' 
      }"
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
        <template v-for="(item, index) in items">
          <div 
            v-if="isBetweenViewRanges(index)"
            :key="index"
            :style="{ height: `${ itemHeight }px` }"
          >
            <slot 
              :index="index"
              :item="item"
            ></slot>
          </div>
        </template>
      </div>
  </div>
  </div>
</template>

<script>
  // import { tools } from '../../packages/scripts/utils'

  export default {
    name: 'ZVirtualScroll',

    props: {
      // 渲染数量
      count: {
        type: [Number, String],
        default: 10
      },

      // 设定组件高度
      height: {
        type: [Number, String],
        required: false
      },

      // 每项列表的高度
      itemHeight: {
        type: [Number, String],
        required: false
      },

      // 要显示的项目数组
      items: {
        type: Array,
        default: () => ([])
      },  

      // 设定组件的宽度
      width: {
        type: [Number, String],
        required: false
      }
    },

    data() {
      return {
        // 列表总高度
        phantomHeight: 0,

        // 开始index
        startIndex: 0,

        // 结束index
        endIndex: 0,

        // 偏移量
        startOffset: 0
      }
    },

    created() {
      this.phantomHeight = this.items.length * this.itemHeight
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
          this.endIndex = startIndex + Number(this.count)
        },
        immediate: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .viewport {
    position: relative;
    overflow-y: auto;
  }

  .list-phantom {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
</style>