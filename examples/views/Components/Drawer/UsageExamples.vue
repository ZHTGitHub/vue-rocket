<template>
  <div class="usage-examples">
    <usage-demo>
      <div slot="code">
        <pre class="line-numbers">
          <code class="language-markup">
            &lt;template>
              &lt;z-drawer
                :menus="menus"
                app
              >&lt;/z-drawer>
            &lt;/template>

            &lt;script>
              export default {
                data() {
                  return {
                    menus: [
                      {
                        pId: '-1',
                        id: 'home',
                        unique: 'home',
                        icon: 'mdi-home',
                        title: '首页',
                        link: undefined,
                        leaf: false
                      },

                      {
                        pId: '-1',
                        id: 'components',
                        unique: 'components',
                        expanded: false,
                        icon: 'mdi-view-dashboard',
                        title: '组件',
                        link: undefined,
                        leaf: true,
                        children: [
                          {
                            pId: 'components',
                            unique: 'drawer',
                            icon: '',
                            title: 'Drawer 导航抽屉',
                            link: undefined
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            &lt;/script>
          </code>
        </pre>
      </div>
      <div slot="demo">
        <v-card height="400" width="256" class="mx-auto">
          <z-drawer 
            :menus="menus" 
            permanent
          ></z-drawer>
        </v-card>
      </div>
    </usage-demo>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism-okaidia.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
  import 'prismjs/plugins/line-numbers/prism-line-numbers.js'

  export default {
    name: 'UsageExamples',

    data() {
      return {
        menus: [
          {
            pId: '-1',
            id: 'home',
            unique: 'home',
            icon: 'mdi-home',
            title: '首页',
            link: undefined,
            leaf: false
          },

          {
            pId: '-1',
            id: 'components',
            unique: 'components',
            expanded: false,
            icon: 'mdi-view-dashboard',
            title: '组件',
            link: undefined,
            leaf: true,
            children: [
              {
                pId: 'components',
                unique: 'drawer',
                icon: '',
                title: 'Drawer 导航抽屉',
                link: undefined
              }
            ]
          }
        ]
      }
    },

    mounted() {
      Prism.highlightAll()
    }
  }
</script>