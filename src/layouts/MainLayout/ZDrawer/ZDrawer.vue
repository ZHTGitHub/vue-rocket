<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    width="256px"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Application
        </v-list-item-title>
        <v-list-item-subtitle>
          subtext
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <div v-for="item in menus" :key="item.id">
      <template v-if="!item.children">
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

      <template v-else>
        <v-list dense>
          <v-list-group
            v-model="item.active"
            :prepend-icon="item.icon"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="child in item.children"
              :key="child.id"
              link
              @click="onSelect(child, $event)"
            >
              <v-list-item-icon>
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="child.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </template>
    </div>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'ZDrawer',
    data() {
      return {
        drawer: null,
        menus: [
          // {
          //   pId: '0',
          //   id: '1',
          //   index: 0,
          //   icon: 'mdi-home',
          //   title: '首页',
          //   link: '/home'
          // },
          {
            pId: '0',
            id: '2',
            index: 1,
            icon: 'mdi-book-open-blank-variant',
            title: '示例',
            link: '',
            children: [
              {
                pId: '2',
                id: '2-1',
                index: 0,
                icon: 'mdi-form-select',
                title: '表单',
                link: '/demo/form'
              },
              {
                pId: '2',
                id: '2-2',
                index: 1,
                icon: 'mdi-table',
                title: '表格',
                link: '/demo/table'
              },
              {
                pId: '2',
                id: '2-3',
                index: 1,
                icon: 'mdi-language-css3',
                title: '样式',
                link: '/demo/style'
              }
            ]
          }
        ]
      }
    },

    methods: {
      onSelect(item, event) {
        console.log(event)
        console.log(item)

        this.$router.push({ path: item.link })
      }
    }
  }
</script>