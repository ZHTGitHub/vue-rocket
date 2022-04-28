<template>
  <div 
    class="z-dropdown"
  >
    <ul 
      id="ZDropdownMenuWrapper"
      class="z-dropdown-menu"
    >
      <template
        v-for="(item, index) in items"
      >
        <li 
          v-if="item.show !== false"
          :key="`z.dropdown.menu.item.${ index }`"
          class="z-dropdown-menu-item"
          :data-index="index"
        >
          {{ item.label }} - {{ item.show }}
        </li>
      </template>
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
        options: [],
        firstGoodIndex: -1,
        lastGoodIndex: -1,
      }
    },

    created() {
      this.options = deepClone(this.items)
    },

    mounted() {
      // const dropdownWrapper = this.$refs.ZDropdownWrapper

      // dropdownWrapper.addEventListener('scroll', () => {
      //   // console.log(dropdownWrapper.offsetHeight)
      //   // console.log(dropdownWrapper.scrollTop)
      // })
      const vm = this
      
      let [showItem, hideItem] = [{}, {}]
      let [showIndex, hideIndex] = [-1, -1]

      observerHandle(document.querySelectorAll("#ZDropdownMenuWrapper .z-dropdown-menu-item"), function (res) {
          console.log(234, res);
      });

      function observerHandle (elements, callback) {
          let observer = new IntersectionObserver(entries => {
              entries.forEach((item) => {
                  if (item.intersectionRatio >= 0.5) {
                      // item.target.dataset.visible = 1
                      showIndex = +item.target.dataset.index

                      showItem = vm.options[showIndex]

                      // console.log(vm.options[showIndex])

                      // console.log(item.target.dataset);
                      console.log(item.target.innerHTML, '显示', item.intersectionRatio);
                  } else {
                      // item.target.dataset.visible = 0
                      hideIndex = +item.target.dataset.index

                      hideItem = vm.options[hideIndex]

                      // console.log(vm.options[hideIndex])

                      // console.log(item);
                      console.log(item.target.innerHTML, '不显示', item.intersectionRatio);
                  }
              });

              console.log({showItem, hideItem})
              console.log({showIndex, hideIndex})
              const lastIndex = vm.options.length - 1

              vm.lastGoodIndex = showIndex + 10 < lastIndex ? showIndex + 10 : showIndex

              if(hideIndex === lastIndex) {
                vm.firstGoodIndex = showIndex - 10 > 0 ? showIndex - 10 : 0
              }else {
                vm.firstGoodIndex = hideIndex - 10 > 0 ? hideIndex - 10 : 0
              }

              // vm.options.map((option, optionIndex) => {
              //   if(optionIndex >= vm.firstGoodIndex && optionIndex <= vm.lastGoodIndex) {
              //     option.show = true
              //     vm.$set(option, optionIndex, { ...option, show: true })
              //   }else {
              //     option.show = false
              //     vm.$set(option, optionIndex, { ...option, show: false })
              //   }
              // })

              // console.log(vm.options)

              // vm.options = [...vm.options]

          }, {
              threshold: [0.5], // 展现面积为50%触发
          });

          observer.POLL_INTERVAL = 50; // 节流时间为50毫秒

          Array.from(elements).forEach(el => observer.observe(el));
      }
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

    watch: {
      lastGoodIndex: {
        handler(index) {
          console.log(index)
          this.options.map((option, optionIndex) => {
                if(optionIndex <= index) {
                  this.$set(option, optionIndex, { ...option, show: true })
                }
                else {
                  this.$set(option, optionIndex, { ...option, show: false })
                }
              })
        },
        immediate: true
      }
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