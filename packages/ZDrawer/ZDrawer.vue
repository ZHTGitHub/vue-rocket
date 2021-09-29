<template>
  <v-navigation-drawer
    v-model="drawer"
    :absolute="absolute"
    :app="app"
    :clipped="clipped"
    :color="color"
    :fixed="fixed"
    :floating="floating"
    :permanent="permanent"
    :stateless="stateless"
    :temporary="temporary"
    :width="width"
  >
    <div class="z-drawer-header" :style="{ height: headerHeight }">
      <slot name="header"></slot>
    </div>

    <v-divider></v-divider>
    
    <v-list dense shaped>
      <template v-for="item in menus">
        <!-- 一级列表 BEGIN -->
        <v-list-item 
          v-if="!item.leaf"
          :key="item.key"
          active-class="active-item"
          :input-value="item.realm === realm"
          @click="onSelect(item, $event)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- 一级列表 END -->
        
        <!-- 二级列表 BEGIN -->
        <v-list-group
          v-else
          v-model="item.expanded"
          :key="item.key"
          :prepend-icon="item.icon"
          :value="currentItem.pId === item.id ? true : false"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="child in item.children"
            :key="child.key"
            active-class="active-item"
            class="pl-12"
            :input-value="child.realm === realm"
            link
            @click="onSelect(child, $event)"
          >
            <v-list-item-content>
              <v-list-item-title>
                {{ child.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <!-- 二级列表 END -->
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'ZDrawer',

    props: {
      absolute: {
        type: Boolean,
        default: false
      },

      app: {
        type: Boolean,
        default: false
      },

      clipped: {
        type: Boolean,
        default: false
      },
      
      color: {
        type: String,
        required: false
      },

      fixed: {
        type: Boolean,
        default: false
      },

      floating: {
        type: Boolean,
        default: false
      },

      headerHeight: {
        type: String,
        default: '56px'
      },

      menus: {
        type: Array,
        required: true
      },

      permanent: {
        type: Boolean,
        default: false
      },

      stateless: {
        type: Boolean,
        default: false
      },

      temporary: {
        type: Boolean,
        default: false
      },

      width: {
        type: [Number, String],
        default: 256
      }
    },

    data() {
      return {
        drawer: null,
        realm: null,
        currentItem: {}
      }
    },

    methods: {
      onClose() {
        this.drawer = false
      },

      onOpen() {
        this.drawer = true
      },

      onToggle() {
        this.drawer = !this.drawer
      },

      onSelect(item) {
        console.log(item)
        this.realm = item.realm
        this.currentItem = item
        this.$router.push({ path: item.link })
      }
    },

    watch: {
      '$route': {
        handler(route) {
          const { meta } = route
          this.realm = meta.realm

          for(let item of this.menus) {
            item.expanded = false
            if(item.key === meta.parent) {
              item.expanded = true
            }
          }
        },
        immediate: true
      },
    }
  }
</script>

<style scoped lang="scss">
  .z-drawer-header {
    min-height: 56px;
  }

  .active-item {
    .v-list-item__icon {
      color: #1976d2 !important;
    }
  }
</style>