<template>
  <div 
    ref="zList"
    :class="['z-list', `elevation-${ elevation }`]" 
    :style="{
      position,
      height: computedHeight,
      maxHeight: computedMaxHeight,
      minHeight: computedMinHeight
    }"
    @scroll="onScroll"
  >
    <div class="z-list-header">
      <slot name="header"></slot>
    </div>

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

    <div class="z-list-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  let [scrollTop, viewportHeight] = [0, 0]
  const keyCodes = [13, 38, 40]

  export default {
    name: 'ZList',

    props: {
      dataSource: {
        type: Array,
        default: () => ([])
      },

      elevation: {
        type: [Number, String],
        default: 0
      },

      focus: {
        type: Boolean,
        default: true
      },

      height: {
        type: [Number, String],
        default: 300
      },

      maxHeight: {
        type: [Number, String],
        required: false
      },

      minHeight: {
        type: [Number, String],
        required: false
      },

      position: {
        valirator(value) {
          return ['relative', 'absolute', 'fixed'].includes(value)
        },
        default: 'relative'
      }
    },

    data() {
      return {
        activedIndex: -1,
        startIndex: -1,
        endIndex: -1,
        lastIndex: -1
      }
    },

    created() {
      this.lastIndex = this.dataSource.length - 1
    },

    mounted() {
      viewportHeight = this.$refs.zList.offsetHeight

      document.addEventListener('keydown', (event) => {
        const { keyCode } = event

        if(keyCodes.includes(keyCode)) {
          event.preventDefault()

          switch (keyCode) {
            case 13: 
              this.$emit('input', this.dataSource[this.activedIndex])
              break;

            case 38:
              this.scrollUp()
              break;

            case 40:
              this.scrollDn()
              break;
          }
        }
      })
    },

    methods: {
      onScroll() {
        scrollTop = this.$refs.zList.scrollTop
      },

      onSelectItem(index) {
        this.activedIndex = index

        this.$emit('input', this.dataSource[this.activedIndex])
      },

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
      }
    }
  }
</script>

<style scoped lang="scss">
  .z-list {
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