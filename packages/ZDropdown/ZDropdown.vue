<template>
  <div class="z-dropdown">
    <v-text-field ></v-text-field>

    <ul 
      id="ZDropdownMenuWrapper"
      class="z-dropdown-menu"
    >
      <template
        v-for="(item, index) in filterItems"
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
  import { tools } from '../../packages/scripts/utils'

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

      limit: {
        type: [Boolean, Number, String],
        required: false
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

      value: {
        type: String,
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
        originItems: [],
        filterItems: []
      }
    },

    created() {
      this.originItems = tools.deepClone(this.items)
      this.filterItems = this.originItems
    },

    methods: {
      search() {
        if(this.value) {
          if(tools.getType(this.limit) === 'boolean') {
            this.searchItems()
          }
          else {
            if(tools.getType(+this.limit) === 'number') {
              this.searchItems()
            }
            else {
              this.searchItems()
            }
          }
        }
        else {
          this.filterItems = this.originItems
        }
      },

      searchItems() {
        const filterItems = this.originItems.filter(item => item.label.includes(this.value))

        if(tools.getType(+this.limit) === 'number') {
          this.filterItems = filterItems.slice(0, this.limit)
        }
        else {
          this.filterItems = filterItems
        }
      }
    },

    watch: {
      value: {
        handler(value) {
          this.search()
        },
        // immediate: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .z-dropdown {
    position: relative;
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