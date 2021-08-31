<template>
  <div class="demo-padding z-flex flex-wrap">
    <template v-for="(items, index) in padding">
      <table class="mr-4 api-table" :key="`padding_${ index }`">
        <thead>
          <tr>
            <th>类名</th>
            <th>效果</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, i) in items" :key="`padding_${ i }`">
            <td>{{ item.class }}</td>
            <td>{{ item.label }}</td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>

<script>
  import { padding } from './cells'

  export default {
    name: 'DemoStylePadding',
    data() {
      return {
        padding
      }
    }
  }
</script>

<style scoped>
  
</style>