<template>
  <div 
    ref="zList"
    :class="['z-list', `elevation-${ elevation }`]" 
    :style="{
      height: computedHeight,
      maxHeight: computedMaxHeight,
      minHeight: computedMinHeight,
      width: computedWidth
    }"
    @scroll="onScroll"
  >
    <!-- 头部 BEGIN -->
    <div class="z-list-header">
      <slot name="header"></slot>
    </div>
    <!-- 头部 END -->

    <!-- 列表 BEGIN -->
    <ul class="z-list-items">
      <template v-for="(item, index) in dataSource">
        <li 
          :key="`list_item_${ index }`"
          :class="['z-list-item', `z-list-item${ index }`, activedIndex === index ? 'actived' : '']"
          @click="onSelectItem(index)"
        >
          <slot :item="item" :index="index"></slot>
        </li>
      </template>
    </ul>
    <!-- 列表 END -->

    <!-- 底部 BEGIN -->
    <div class="z-list-footer">
      <slot name="footer"></slot>
    </div>
    <!-- 底部 END -->
  </div>
</template>

<script>
  import tools from '../scripts/utils/tools'
  let [scrollTop, viewportHeight] = [0, 0]
  const keyCodes = [13, 38, 40]

  export default {
    name: 'ZList',

    props: {
      dataSource: {
        type: Array,
        default: () => ([])
      },

      defaultValue: {
        type: [Number, String],
        required: false
      },

      elevation: {
        type: [Number, String],
        default: 0
      },

      height: {
        type: [Number, String],
        default: '100%'
      },

      maxHeight: {
        type: [Number, String],
        required: false
      },

      minHeight: {
        type: [Number, String],
        required: false
      },

      width: {
        type: [Number, String],
        required: false
      }
    },

    data() {
      return {
        activedIndex: -1,
        lastIndex: -1
      }
    },

    mounted() {
      viewportHeight = this.$refs.zList.offsetHeight

      document.addEventListener('keydown', this.todo)
    },

    beforeDestroy() {
      document.removeEventListener('keydown', this.todo)
    },

    methods: {
      onScroll() {
        scrollTop = this.$refs.zList.scrollTop
      },

      onSelectItem(index) {
        this.activedIndex = index

        this.$emit('input', {
          item: this.dataSource[this.activedIndex],
          index: this.activedIndex
        })
      },

      // 向上
      scrollUp() {
        --this.activedIndex

        if(this.activedIndex < 0) {
          this.activedIndex = this.lastIndex
          const lastTarget = document.querySelector(`.z-list-item${ this.lastIndex }`)
          this.$refs.zList.scrollTop = lastTarget.offsetTop
        }

        const target = document.querySelector(`.z-list-item${ this.activedIndex }`)

        if(target.offsetTop - scrollTop <= 0) {
          this.$refs.zList.scrollTop = target.offsetTop - target.offsetHeight
        }
      },

      // 向下
      scrollDn() {
        ++this.activedIndex

        if(this.activedIndex > this.lastIndex) {
          this.activedIndex = 0
          this.$refs.zList.scrollTop = 0
        }

        const target = document.querySelector(`.z-list-item${ this.activedIndex }`)

        if(target.offsetTop - scrollTop >= viewportHeight) {
          this.$refs.zList.scrollTop = target.offsetTop - viewportHeight + target.offsetHeight
        }
      },

      todo(event) {
        const { keyCode } = event

        if(keyCodes.includes(keyCode)) {
          event.preventDefault()

          switch (keyCode) {
            case 13: 
              this.$emit('input', {
                item: this.dataSource[this.activedIndex],
                index: this.activedIndex
              })
              break;

            case 38:
              this.scrollUp()
              break;

            case 40:
              this.scrollDn()
              break;
          }
        }
      }
    },

    computed: {
      computedHeight() {
        const height = +this.height
        const isNumber = !isNaN(height)

        if(isNumber) {
          return `${ height }px`
        }

        return this.height
      },

      computedMaxHeight() {
        const maxHeight = +this.maxHeight
        const isNumber = !isNaN(maxHeight)

        if(isNumber) {
          return `${ maxHeight }px`
        }

        return this.maxHeight
      },

      computedMinHeight() {
        const minHeight = +this.minHeight
        const isNumber = !isNaN(minHeight)

        if(isNumber) {
          return `${ minHeight }px`
        }

        return this.minHeight
      },

      computedWidth() {
        const width = +this.width
        const isNumber = !isNaN(width)

        if(isNumber) {
          return `${ width }px`
        }

        return this.width
      },
    },

    watch: {
      dataSource: {
        handler(dataSource) {
          this.lastIndex = dataSource.length - 1
          this.activedIndex = tools.findIndex(dataSource, this.defaultValue)

          if(this.activedIndex > -1) {
            this.$nextTick(() => {
              const target = document.querySelector(`.z-list-item${ this.activedIndex }`)
              this.$refs.zList.scrollTop = target.offsetTop - target.offsetHeight
            })
          }
        },
        deep: true,
        immediate: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .z-list {
    background-color: #fff;
    overflow-y: auto;

    ul.z-list-items {
      padding: 0;

      li.z-list-item {
        &:hover {
          background-color: rgba(0, 0, 0, .04);
        }

        &.actived {
          background-color: rgba(0, 0, 0, .12);
        }
      }
    }
  }
</style>