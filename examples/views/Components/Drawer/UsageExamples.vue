<template>
  <div class="usage-examples">
    <usage-demo :code="code">
      <div slot="demo">
        <v-row>
          <v-col :cols="7">
            <v-treeview
              activatable
              dense
              open-all
              :items="items"
            ></v-treeview>
          </v-col>

          <v-col :cols="5">
            <v-card height="400" width="256" class="mx-auto">
              <z-drawer 
                activeClass="pink--text"
                :menus="menus" 
                permanent
                @select="onSelect"
              >
              </z-drawer>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </usage-demo>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.js'

  const code = 
`
<template>
  <z-drawer
    :menus="menus"
    app
  ></z-drawer>
</template>
`

  export default {
    name: 'UsageExamples',

    data() {
      return {
        code,
        items: [
          {
            id: 1,
            name: '首页',
            children: [
              { id: 1, name: 'pId: -1（上级节点 id）' },
              { id: 2, name: 'id: home（唯一）' },
              { id: 3, name: 'key: home（与 children 路由 meta 的 pKey 保持一致，用于默认展开）' },
              { id: 4, name: 'expanded: false（是否默认展开，有子节点情况下生效）' },
              { id: 5, name: 'icon: mdi-home' },
              { id: 6, name: 'realm: home（与 children 路由 meta 的 realm 保持一致，用于默认选中）' },
              { id: 7, name: 'title: 首页' },
              { id: 8, name: 'autopilot: false（若 autopilot 为 false，即使 !!link === true 不导航）' },
              { id: 9, name: 'link: null（!!link === false，不导航）' },
              { id: 10, name: 'leaf: false（是否有子节点）' },
              { id: 11, name: 'children: 属性与上级节点保持一致' },
            ]
          }
        ],

        menus: [
          {
            pId: '-1',
            id: 'home',
            key: 'home',
            icon: 'mdi-home',
            realm: 'home',
            title: '首页',
            link: undefined,
            leaf: false,
            badge: {
              mode: '',
              total: 99,
              class: 'animate__animated animate__bounce'
            }
          },

          {
            pId: '-1',
            id: 'components',
            key: 'components',
            expanded: false,
            icon: 'mdi-view-dashboard',
            title: '组件',
            link: '/components',
            leaf: true,
            children: [
              {
                pId: 'components',
                key: 'drawer',
                icon: '',
                realm: 'drawer',
                title: 'Drawer 导航抽屉',
                link: '/components/drawer',
                badge: {
                  mode: '',
                  total: 6
                }
              }
            ]
          }
        ]
      }
    },

    mounted() {
      Prism.highlightAll()
    },

    methods: {
      onSelect(info) {
        console.log(info)
      }
    }
  }
</script>