<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    width="256px"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Vue Rocket
        </v-list-item-title>
        <v-list-item-subtitle>
          ZHT
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

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
          //   link: '/home',
          //   leaf: false
          // },
          {
            pId: '0',
            id: '2',
            index: 1,
            icon: 'mdi-book-open-blank-variant',
            title: '示例',
            link: '',
            leaf: true,
            children: [
              {
                pId: '2',
                id: '2-1',
                index: 0,
                icon: 'mdi-view-dashboard',
                title: '组件',
                link: '/demo/components',
                leaf: true,
                children: [
                  {
                    pId: '2-1',
                    id: '2-1-1',
                    index: 0,
                    icon: '',
                    title: 'Input 输入框',
                    link: '/demo/components/input'
                  },
                  {
                    pId: '2-1',
                    id: '2-1-2',
                    index: 1,
                    icon: '',
                    title: 'Select 选择器',
                    link: '/demo/components/select'
                  },
                  {
                    pId: '2-1',
                    id: '2-1-3',
                    index: 2,
                    icon: '',
                    title: 'Checkboxs 多选框',
                    link: '/demo/components/checkboxs'
                  },
                  {
                    pId: '2-1',
                    id: '2-1-4',
                    index: 3,
                    icon: '',
                    title: 'Radios 单选框',
                    link: '/demo/components/radios'
                  },
                  {
                    pId: '2-1',
                    id: '2-1-5',
                    index: 4,
                    icon: '',
                    title: 'Switch 开关',
                    link: '/demo/components/switch'
                  },
                  {
                    pId: '2-1',
                    id: '2-1-6',
                    index: 5,
                    icon: '',
                    title: 'Button 按钮',
                    link: '/demo/components/button'
                  },
                  {
                    pId: '2-1',
                    id: '2-1-7',
                    index: 6,
                    icon: '',
                    title: 'Pagination 分页',
                    link: '/demo/components/pagination'
                  }
                ]
              },
              {
                pId: '2',
                id: '2-2',
                index: 1,
                icon: 'mdi-form-select',
                title: '表单',
                link: '/demo/form',
                leaf: false
              },
              {
                pId: '2',
                id: '2-3',
                index: 2,
                icon: 'mdi-table',
                title: '表格',
                link: '/demo/table',
                leaf: false
              },
              {
                pId: '2',
                id: '2-4',
                index: 3,
                icon: 'mdi-language-css3',
                title: '样式',
                link: '/demo/style',
                leaf: false
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