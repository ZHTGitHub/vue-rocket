<template>
  <v-app-bar 
    app 
    color="#fff"
    flat
    :style="style"
  >
    <h2 class="title" @click="navHome">Vue Rocket</h2>

    <v-spacer></v-spacer>

    <ul class="z-menu">
      <li 
        v-for="item in items"
        :key="item.value"
        class="z-menu-item"
        :class="item.value === selected ? 'actived' : '' "
        @click="switchTabs(item)"
      >{{ item.label }}</li>
    </ul>
  </v-app-bar>
</template>

<script>
  const style = {
    'box-shadow': '0 2px 8px #f0f1f2 !important'
  }

  export default {
    name: 'ZHeader',

    data() {
      return {
        style,
        items: [],
        selected: null
      }
    },

    created() {
      this.getTabs()
    },

    methods: {
      async getTabs() {
        const result = await this.$store.dispatch('GLOBAL_GET_TABS')

        if(result.code === 200) {
          this.items = result.items
        }
      },

      navHome() {
        this.$router.push({ path: '/home' })
      },

      switchTabs({ value, pathname }) {
        this.selected = value
        this.$router.push({ path: pathname })
      }
    },

    watch: {
      '$route': {
        handler(route) {
          this.selected = route.path.split('/')[1]
        },
        immediate: true
      }
    }
  }
</script>

<style scoped lang="scss">
  h2.title {
    font-weight: bold;
    cursor: pointer;
  }

  ul.z-menu {
    display: flex;

    li.z-menu-item {
      position: relative;
      min-height: 64px;
      height: 64px;
      padding: 0 12px;
      list-style-type: none;
      line-height: 64px;
      cursor: pointer;
      transition: color .3s;

      &.actived {
        color: #2196f3;
        &::after {
          border-bottom-color: #2196f3;
        }
      }

      &::after {
        position: absolute;
        content: "";
        left: 12px;
        right: 12px;
        border-bottom: 2px solid transparent;
        transition: border-color .3s cubic-bezier(.645,.045,.355,1);
      }

      &:hover {
        color: #2196f3;

        &::after {
          border-bottom-color: #2196f3;
        }
      }
    }
  }
</style>