<template>
  <div class="demo-flex z-flex flex-wrap">
    <template v-for="(items, index) in flex">
      <table class="api-table" :key="`flex_${ index }`">
        <thead>
          <tr>
            <th>类名</th>
            <th>效果</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, index) in items" :key="`flex_${ index }`">
            <td>{{ item.class }}</td>
            <td>{{ item.label }}</td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>

<script>
  import { flex } from './cells'

  export default {
    name: 'DemoStyleFlex',
    data() {
      return {
        flex
      }
    }
  }
</script>

<style scoped>

</style>