<template>
  <div 
    ref="ZDropdownWrapper"
    class="z-dropdown"
  >
    <ul 
      ref="ZDropdownMenuWrapper"
      class="z-dropdown-menu"
    >
      <li 
        v-for="(item, index) in items"
        :key="`z.dropdown.menu.item.${ index }`"
        :ref="`ZDropdownMenuItemWrapper.${ index }`"
        class="z-dropdown-menu-item"
      >
        {{ item.label }} - {{ item.offsetTop }}
      </li>
    </ul>
  </div>
</template>

<script>
  import { deepClone } from '../../packages/scripts/tools'

  export default {
    name: 'ZDropdown',

    props: {
      height: {
        type: [Number, String],
        required: false
      },

      items: {
        type: Array,
        default: () => ([])
      },

      maxHeight: {
        type: [Number, String],
        required: false
      },

      maxWidth: {
        type: [Number, String],
        required: false
      },

      minHeight: {
        type: [Number, String],
        required: false
      },

      minWidth: {
        type: [Number, String],
        required: false
      },

      width: {
        type: [Number, String],
        required: false
      },

      placement: {
        validator(value) {
          return ['bottom', 'bottomLeft', 'bottomRight', 'top', 'topLeft', 'topRight'].indexOf(value) !== -1
        },
        default: 'bottomLeft'
      }
    },

    data() {
      return {
        options: []
      }
    },

    created() {
      this.options = deepClone(this.items)
    },

    mounted() {
      const dropdownWrapper = this.$refs.ZDropdownWrapper

      dropdownWrapper.addEventListener('scroll', () => {
        // console.log(dropdownWrapper.offsetHeight)
        // console.log(dropdownWrapper.scrollTop)
      })
    },

    beforeDestroy() {

    },

    methods: {
      itemOffsetTop(index) {
        this.$nextTick(() => {
          const wrapper = this.$refs[`ZDropdownMenuItemWrapper.${ index }`]

          this.$set(this.options, index, { ...this.options[index], offsetTop: wrapper[0]?.offsetTop })

          console.log(this.options)

          // console.log(wrapper)
          // console.log(wrapper[0].offsetTop)

          // return wrapper[0]?.offsetTop
        })
      }
    },

    computed: {
      
    }
  }
</script>

<style scoped lang="scss">
  .z-dropdown {
    max-height: 304px;
    overflow: auto;

    .z-dropdown-menu {

      .z-dropdown-menu-item {
        display: flex;
        align-items: center;
        align-self: center;
        flex-wrap: wrap;
        flex: 1 1;
        padding: 12px 16px;
        overflow: hidden;

        &:hover {
          background-color: rgba(0, 0, 0, .03);
        }
      }
    }
  }
</style>