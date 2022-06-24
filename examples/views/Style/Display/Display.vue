<template>
  <div class="demo-display">
    <typing-title :title="$route.meta.title"></typing-title>
    
    <!-- 元素显示类型 BEGIN -->
    <v-alert
      border="left"
      colored-border
      :color="color"
      dense
      elevation="1"
    >
      元素显示类型
    </v-alert>

    <div class="mb-0">
      <p
        v-for="(item, index) in displayList"
        :key="index"
      >
        <span class="mr-2 bg-yellow light">{{ item.class }}</span>
        <span>{{ item.label }}</span>
      </p>
    </div>
    <!-- 元素显示类型 END -->
  </div>
</template>

<script>
  import { displayList } from './cells'

  export default {
    name: 'DemoStyleDisplay',

    data() {
      return {
        displayList,

        color: 'text-blue'
      }
    }
  }
</script>