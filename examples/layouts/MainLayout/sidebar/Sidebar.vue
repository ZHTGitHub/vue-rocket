<template>
  <div class="z-sidebar">
    <section class="menu-inner">
      <ul 
        v-for="item in items"
        class="menu-site"
        :key="item.value"
      >
        <li class="menu-item-group">
          <div class="menu-item-group-title">{{ item.label }}</div>

          <ul 
            v-for="child in item.children"
            class="menu-item-group-list"
            :key="child.value"
          >
            <li 
              :class="`${ child.value === selected ? 'ant-menu-item-selected' : '' } ant-menu-item menu-item-only-child`"
              @click="switchMenu(child)"
            >{{ child.label }}</li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'ZSidebar',

    data() {
      return {
        name: null,
        items: [],
        selected: null
      }
    },

    methods: {
      async getMenus() {
        const result = await this.$store.dispatch('GLOBAL_GET_MENU', this.name)

        if(result.code === 200) {
          this.items = result.items
        }

        console.log(this.items)
      },

      switchMenu({ value, link }) {
        this.selected = value
        this.$router.push({ path: link })
      }
    },

    watch: {
      '$route': {
        handler(route) {
          this.name = route.path.split('/')[1]
          this.selected = route.path.split('/')[2]
          this.getMenus()
        },
        immediate: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .z-sidebar {
    box-sizing: border-box;
    width: 256px;
    max-width: 256px;
    height: calc(100vh - 64px);
    border-right: 1px solid rgba(0, 0, 0, .06);
    overflow-x: hidden;
    overflow-y: auto;

    section.menu-inner {
      padding-bottom: 64px;

      ul.menu-site {
        padding-left: 0;

        li.menu-item-group {
          .menu-item-group-title {
            padding: 8px 16px;
            padding-left: 40px;
            margin-top: 16px;
            margin-bottom: 16px;
            line-height: 1.5715;
            color: #00000073;
            font-size: 13px;
            transition: all .3s;

            &::after {
              content: "";
              position: relative;
              display: block;
              top: 12px;
              width: calc(100% - 20px);
              height: 1px;
              background: rgba(0, 0, 0, .06);
              transition: all .3s cubic-bezier(.78,.14,.15,.86);
            }
          }

          ul.menu-item-group-list {
            padding-left: 0;

            li.ant-menu-item {
              position: relative;
              display: flex;
              align-items: center;
              padding: 0 16px 0 28px;
              padding-left: 40px;
              margin-top: 4px;
              height: 40px;
              line-height: 40px;
              text-overflow: ellipsis;
              cursor: pointer;
              overflow: hidden;

              &:hover {
                color: #2196f3;
              }
            }

            li.ant-menu-item-selected {
              background-color: #e6f7ff;

              &::after {
                content: "";
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                border-right: 3px solid #2196f3;
              }
            }

            li.menu-item-only-child {
              
            }
          }
        }
      }
    }
  }
</style>