<template>
  <div class="demo-style">
    <v-expansion-panels v-model="panel">
      <v-expansion-panel
        v-for="item in panels"
        :key="item.key"
      >
        <v-expansion-panel-header>
          {{ item.title }}
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <demo-padding v-if="item.key === 1"></demo-padding>
          <demo-margin v-else-if="item.key === 2"></demo-margin>
          <demo-flex v-else-if="item.key === 3"></demo-flex>
          <demo-typography v-else-if="item.key === 4"></demo-typography>
          <demo-round v-else-if="item.key === 5"></demo-round>
          <demo-float v-else-if="item.key === 6"></demo-float>
          <demo-elevation v-else></demo-elevation>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
  export default {
    name: 'DemoStyle',
    data() {
      return {
        panel: 0,
        panels: [
          {
            key: 1,
            title: '内边距'
          },
          {
            key: 2,
            title: '外边距' 
          },
          {
            key: 3,
            title: 'Flex布局' 
          },
          {
            key: 4,
            title: '文本'
          },
          {
            key: 5,
            title: '圆角'
          },
          {
            key: 6,
            title: '浮动'
          },
          {
            key: 7,
            title: '海拔'
          }
        ]
      }
    },

    components: {
      'demo-padding': () => import('./Padding'),
      'demo-margin': () => import('./Margin'),
      'demo-flex': () => import('./Flex'),
      'demo-typography': () => import('./Typography'),
      'demo-round': () => import('./Round'),
      'demo-float': () => import('./Float'),
      'demo-elevation': () => import('./Elevation'),
    }
  }
</script>