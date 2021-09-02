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
    :width="width"
  >
    <div class="z-drawer-header" :style="{ height: headerHeight }">
      <slot name="header"></slot>
    </div>

    <v-divider></v-divider>

    <div v-for="item in menus" :key="item.id">
      <!-- 一级列表 BEGIN -->
      <template v-if="!item.leaf">
        <v-list dense>
          <v-list-item 
            link
            @click="onSelect(item, $event)"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
      <!-- 一级列表 END -->

      <template v-else>
        <v-list dense>
          <v-list-group
            v-model="item.active"
            :prepend-icon="item.icon"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </template>
            
            <template v-for="child in item.children">
              <!-- 二级列表 BEGIN -->
              <v-list-item
                v-if="!child.leaf"
                :key="child.id"
                class="pl-6"
                link
                @click="onSelect(child, $event)"
              >
                <v-list-item-icon class="mr-4">
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ child.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <!-- 二级列表 END -->

              <!-- 三级列表 BEGIN -->
              <v-list-group
                v-else
                :key="child.id"
                :value="true"
                no-action
                sub-group
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>{{ child.title }}</v-list-item-title>
                  </v-list-item-content>
                </template>
      
                <v-list-item
                  v-for="grandChild in child.children"
                  :key="grandChild.id"
                  link
                  @click="onSelect(grandChild, $event)"
                >
                  <v-list-item-title v-text="grandChild.title"></v-list-item-title>
      
                  <v-list-item-icon>
                    <v-icon v-text="grandChild.icon"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-group>
            </template>
            <!-- 三级列表 END -->
          </v-list-group>
        </v-list>
      </template>
    </div>
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

      width: {
        type: [Number, String],
        default: 256
      }
    },

    data() {
      return {
        drawer: null,
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

      onSelect(item, event) {
        console.log(event)
        console.log(item)
        this.$router.push({ path: item.link })
      }
    }
  }
</script>

<style scoped lang="css">
  .z-drawer-header {
    min-height: 56px;
  }
</style>

