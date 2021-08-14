<template>
  <div class="main-layout">
    <v-navigation-drawer
      v-model="drawer"
      app
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

      <v-list>
        <div v-for="(item, index) in menus" :key="`drawer_${ index }`">

          <template v-if="!item.children">
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>

              <v-list-item-title>{{ item.label }}</v-list-item-title>
            </v-list-item>
          </template>
          

          <template v-else>
            <v-list-group
              :value="true"
              prepend-icon="mdi-account-circle"
              no-action
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>{{ item.label }}</v-list-item-title>
                </v-list-item-content>
              </template>

                <v-list-item
                  v-for="(record, i) in item.children"
                  :key="`drawer_child_${ i }`"
                  link
                >
                  <v-list-item-content>
                    <v-list-item-icon>
                      <v-icon>{{ record.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>{{ record.label }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
            </v-list-group>  
          </template>        
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <slot></slot>
    </v-main>
  </div>
</template>

<script>
  export default {
    name: 'MainLayout',
    data() {
      return {
        drawer: null,
        menus: [
          {
            pId: '0',
            id: '1',
            index: 0,
            icon: '',
            label: '首页',
            link: ''
          },
          {
            pId: '0',
            id: '2',
            index: 1,
            icon: '',
            label: '示例',
            link: '',
            children: [
              {
                pId: '2',
                id: '2-1',
                index: 0,
                icon: '',
                label: '表单',
                link: ''
              },
              {
                pId: '2',
                id: '2-2',
                index: 1,
                icon: '',
                label: '表格',
                link: ''
              }
            ]
          }
        ]
      }
    }
  }
</script>