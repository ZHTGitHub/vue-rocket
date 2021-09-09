<template>
  <div class="z-demo-drawer">
    <h4 class="mb-8 text-h4">Drawer 导航抽屉</h4>

    <usage-demo>
      <div slot="code">
        <pre class="line-numbers">
          <code class="language-markup">
            &lt;template>
              &lt;z-drawer
                ref="drawer"
                :menus="menus"
                app
              >&lt;/z-drawer>
            &lt;/template>

            &lt;script>
              import { ZDrawer } from 'vue-rocket'

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
                            link: '/demo/components/drawer'
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
          <z-drawer ref="drawer" :menus="menus" permanent></z-drawer>
        </v-card>
      </div>
    </usage-demo>

    <section class="markdown api-container">
      <h5 class="text-h5">API</h5>
      <template v-for="(item, index) in drawer">
        <div class="mb-10" :key="`input_${index}`">
          <h6 class="text-h6">{{ item.title }}</h6>
          <table class="api-table">
            <thead>
              <tr>
                <th
                  v-for="(title, nIndex) in item.titles"
                  :key="`name_${nIndex}`"
                >
                  {{ title }}
                </th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(child, i) in item.apis" :key="`input_${index}_${i}`">
                <td v-if="child.name">{{ child.name }}</td>
                <td v-if="child.required">{{ child.required }}</td>
                <td v-if="child.type">{{ child.type }}</td>
                <td v-if="child.acceptedValues">{{ child.acceptedValues }}</td>
                <td v-if="child.default">{{ child.default }}</td>
                <td v-if="child.parameters">{{ child.parameters }}</td>
                <td v-if="child.description">{{ child.description }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </section>
  </div>
</template>

<script>
import { drawer } from "./cells"

import Prism from "prismjs"
import "prismjs/themes/prism-okaidia.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.js"

export default {
  name: "ZDemoDrawer",
  data() {
    return {
      drawer,
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
              link: '/demo/components/drawer'
            }
          ]
        }
      ]
    }
  },

  mounted() {
    Prism.highlightAll()
  },
};
</script>

<style scoped>
</style>